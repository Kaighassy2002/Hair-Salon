import React, { useEffect } from 'react'
import {  Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import service from "../images/service.jpg";
import cut from "../images/cutting3.jpg";
import styling from "../images/styling.jpg";
import colour from "../images/colouring.jpg";
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/services.css'
function Services() {
  useEffect(()=>{
    AOS.init()
   },[])
  return (
    <>
    <Header/>
       
        <section  className='mt-2 service mb-4'>
        <div className=' service-container '>
          
            <div  className="bg-dark bg-opacity-25 service-bar">
              <img className='img-fluid  service-img' src={service} alt="" />
          </div>
          <div className='mt-5 pt-4'>
            
        <div className='d-flex justify-content-center'>
              <p style={{alignItems:'center'}} className='text-body-secondary p-3 service-p '>"In the hands of a skilled hairstylist, magic <br />happens. Every snip and style is a step towards unveiling a more beautiful <br /> version of yourself. A great salon experience is about <br /> more than just hair; it's about the confidence you gain."
  
  </p>
        </div>
<div className='d-flex justify-content-center'>
  <Link to={'/booking'} style={{textDecoration:'none'}}>
                <Button  className=' text-center mb-4' variant="success" >Take Appointment</Button>
                
                </Link>
</div>
  
          </div>
           </div>
         
          
          
              
       
       
        </section>
        
        
        <div className='bg-black text-center mb-5'>
          <span className=' p-5 text-white-50 fw-bold service-line'>Life is short. You might as well live it with really great hair</span>
        </div>

        <section className='mt-3 mb-5 item-container'>
        <Container className='mt-5 bg-body-secondary border rounded p-3 '>
            <Row  id='stylist' className='pt-3 pb-4 '>
          <Col sm={12} md={6}  lg={6} >
            <div data-aos="flip-up" >
              <img   className='img-fluid shadow p-3 mb-5 bg-body-tertiary rounded' src={cut}alt="" />
              </div>
          </Col>
          <Col sm={12} md={6}  lg={6} className='d-flex justify-content-center align-items-center flex-column ' >
          <div data-aos="fade-left">
            <h4 className='text-secondary '>CUTTING</h4>
            <ul>
              <li>Short <span>-------------------- 150/-</span> </li>
              <li>Medium/Long <span>-------------------- 170/-</span> </li>
              <li>Restyle <span>-------------------- 200/-</span> </li>
              <li>Clipper Cut  <span>-------------------- 210/-</span> </li>
            </ul>
          </div>
          </Col>
        </Row>
        <Row id='colourists' className=' pb-4 items'>
          <Col sm={12} md={6}  lg={6} className='d-flex justify-content-center align-items-center flex-column'>
         <div data-aos="fade-right" >
            <h4 className='text-secondary' >COLOURING</h4>
            <ul>
              <li>Foil <span>-------------------- 500/-</span> </li>
              <li>All over colour <span>-------------------- 1000/-</span> </li>
              <li>Balayange <span>-------------------- 800/-</span> </li>
              <li>Gloss  <span>-------------------- 1500/-</span> </li>
            </ul>
         </div>
          </Col>
          <Col sm={12} md={6}  lg={6}>
          
         <div data-aos="flip-up"> <img  className='img-fluid  shadow p-3 mb-5 bg-body-tertiary rounded ' src={colour}alt="" /></div>
          </Col>
        </Row>
        <Row id='technicians' className='  pb-4'>
          <Col sm={12} md={6}  lg={6}>
            <div data-aos="flip-up" >
              <img  className='img-fluid p-3 shadow  mb-5 bg-body-tertiary rounded' src={styling}alt="" />
              </div>
          </Col>
          <Col sm={12} md={6}  lg={6} className='d-flex justify-content-center align-items-center flex-column' >
          <div data-aos="fade-left">
            <h4 className='text-secondary'>STYLING</h4>
            <ul>
              <li>Short blow dry <span>-------------------- 1000/-</span> </li>
              <li>Medium blow dry<span>-------------------- 1200/-</span> </li>
              <li>Long blow dry <span>-------------------- 100/-</span> </li>
              <li>Blow dry after colour  <span>-------------------- 1300/-</span> </li>
              <li>Dry styling  <span>-------------------- 100/-</span> </li>
              <li>Add braids to blow dry  <span>-------------------- 1500/-</span> </li>
            </ul>
          </div>
          </Col>
        </Row>
            </Container>
        </section>
        <Footer/>
    </>
  )
}

export default Services
