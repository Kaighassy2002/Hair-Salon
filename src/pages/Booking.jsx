import React, { useEffect, useState } from 'react';
import { Col, FloatingLabel, Form, Row, Alert, Button } from 'react-bootstrap';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { bookingAPI } from '../server/allAPI';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

dayjs.extend(advancedFormat);

function Booking() {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState('');
  const [formData, setFormData] = useState({
    date: null,
    time: null,
    cutting: '',
    coloring: '',
    styling: ''
  });
  const [formErrors, setFormErrors] = useState({
    date: false,
    time: false,
    services: false
  });

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const existingUser = sessionStorage.getItem('exisitingUser');
    if (existingUser) {
      const { username } = JSON.parse(existingUser);
      setDisplayName(username);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleDateChange = (newDate) => {
    setFormData({ ...formData, date: newDate });
    setFormErrors({ ...formErrors, date: false });
  };

  const handleTimeChange = (newTime) => {
    setFormData({ ...formData, time: newTime });
    setFormErrors({ ...formErrors, time: false });
  };

  const handleServiceChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setFormErrors({ ...formErrors, services: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission (not used in your code currently)

    const { date, time, cutting, coloring, styling } = formData;

    // Check if date and time are not selected
    if (!date || !time) {
      toast.warning('Please fill in both date and time fields.');
      return;
    }

    // Validate time format and range
    if (!isValidTime(time)) {
      toast.warning('Please select a time between 10:00 AM and 4:00 PM.');
      return;
    }

    // Check if at least one service is selected
    if (!cutting && !coloring && !styling) {
      toast.warning('Please select at least one service.');
      return;
    }

    // Format date and time for the server
    const formattedDate = dayjs(date).format(' DD MMM YYYY ');
    const formattedTime = dayjs(time, 'hh:mm').format(' hh:mm A');

    // If all validations pass, proceed with API call
    const reqBody = {
      date: formattedDate,
      time: formattedTime,
      cutting,
      coloring,
      styling,
    };

    const token = sessionStorage.getItem('token');
    if (token) {
      const reqHeader = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      try {
        const result = await bookingAPI(reqBody, reqHeader);
        console.log(result);
        if (result.status === 200) {
          toast.success('Your booking is successful');
          setTimeout(() => {
            navigate('/profile');
          }, 2000);
        }
      } catch (err) {
        console.log(err);
        toast.error('Booking failed. Please try again.');
      }
    }
  };

  const isValidTime = (time) => {
    const selectedTime = dayjs(time);
    const startTime = dayjs().set('hour', 10).set('minute', 0).set('second', 0);
    const endTime = dayjs().set('hour', 16).set('minute', 0).set('second', 0);

    return selectedTime.isBetween(startTime, endTime, null, '[]');
  };

  // Function to format the date from a given string to "DD/MM/YY"
  const formatDate = (dateString) => {
    return dayjs(dateString).format('DD/MM/YY');
  };

  // Function to format the time from a given string to "HH:mm"
  const formatTime = (timeString) => {
    return dayjs(timeString).format('HH:mm');
  };

  return (
    <>
      <Header />
      <section className='border rounded p-5 m-5 bg-body-secondary'>
        <h3 className='ps-2 text-center' style={{ letterSpacing: '3px', fontWeight: '700', color: 'black' }}>
          NuLook
        </h3>
        <h5 className='text-light-emphasis'>Book Appointment</h5>
        <div className='ps-5 pe-5 pt-4'>
          <FloatingLabel controlId='floatingInput' label={displayName} className='mb-3 text-success'>
            <Form.Control type='text' placeholder='Enter your name' disabled />
          </FloatingLabel>
          <Row className='g-6'>
            <Col sm>
              <span style={{ fontSize: '12px' }} className='text-danger text-end'>
                * Please select date
              </span>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer  components={['DatePicker']}>
                  <DatePicker
                  className='datecontainer'
                    label='Preferred Date'
                    value={formData.date}
                    onChange={handleDateChange}
                    format='DD/MM/YY'
                    disablePast
                    renderInput={(params) => <Form.Control {...params} isInvalid={formErrors.date} />}
                  />
                  {formErrors.date && (
                    <Form.Control.Feedback type='invalid'>Please select a date.</Form.Control.Feedback>
                  )}
                </DemoContainer>
              </LocalizationProvider>
            </Col>
            <Col md>
              <span style={{ fontSize: '12px' }} className='text-danger text-end'>
                * Please select a time between 10:00 AM to 4:00 PM
              </span>
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DemoContainer className='datecontainer'  components={['TimeField']} >
                  <TimeField
                    
                    label='Preferred Time'
                    value={formData.time}
                    onChange={handleTimeChange}
                    renderInput={(params) => <Form.Control {...params} isInvalid={formErrors.time} />}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Col>
          </Row>
          <p className='mt-3'>What can we help you with?</p>
          <Row className='g-2'>
            <span style={{ fontSize: '12px' }} className='text-danger'>
              * Please select at least one service
            </span>
            <Col md>
              <FloatingLabel controlId='floatingSelectGrid'>
                <Form.Select
                  aria-label='Cutting'
                  value={formData.cutting}
                  onChange={(e) => handleServiceChange('cutting', e.target.value)}
                  isInvalid={formErrors.services}
                >
                  <option hidden>CUTTING</option>
                  <option value='Short'>Short</option>
                  <option value='Medium/Long'>Medium/Long</option>
                  <option value='Restyle'>Restyle</option>
                  <option value='Clipper cut'>Clipper cut</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId='floatingSelectGrid'>
                <Form.Select
                  aria-label='Coloring'
                  value={formData.coloring}
                  onChange={(e) => handleServiceChange('coloring', e.target.value)}
                  isInvalid={formErrors.services}
                >
                  <option hidden>COLOURING</option>
                  <option value='Foil'>Foil</option>
                  <option value='All over colour'>All over colour</option>
                  <option value='Balayage'>Balayage</option>
                  <option value='Gloss'>Gloss</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId='floatingSelectGrid'>
                <Form.Select
                  aria-label='Styling'
                  value={formData.styling}
                  onChange={(e) => handleServiceChange('styling', e.target.value)}
                  isInvalid={formErrors.services}
                >
                  <option hidden>STYLING</option>
                  <option value='Short blow dry'>Short blow dry</option>
                  <option value='Medium blow dry'>Medium blow dry</option>
                  <option value='Long blow dry'>Long blow dry</option>
                  <option value='Blow dry after colour'>Blow dry after colour</option>
                  <option value='Dry styling'>Dry styling</option>
                  <option value='Add braids to blow dry'>Add braids to blow dry</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          {formErrors.date || formErrors.time || formErrors.services ? (
            <Alert variant='danger' className='mt-3'>
              Please complete all required fields correctly.
            </Alert>
          ) : null}
           <Button  onClick={handleSubmit} className='mt-5 ' variant="primary" size="md">
           Take Appointment
        </Button>
          
        </div>
      </section>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
      <Footer />
    </>
  );
}

export default Booking;
