import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import Footer from "./Footer";
import Header from "../components/Header";

import { getUserBookingAPI } from "../server/allAPI";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [userbookings, setUserbookings] = useState([]);

  console.log(userbookings);
  useEffect(() => {
    const userData = sessionStorage.getItem('exisitingUser');
    if (userData) {
      const { username, email } = JSON.parse(userData);
      setUsername(username);
      setEmail(email);
    } else {
      setUsername('');
      setEmail('');
    }
  }, []);

  useEffect(() => {
    getUserbookings();
  }, []);

  const getUserbookings = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    };
    try {
      const result = await getUserBookingAPI(reqHeader);
      console.log('API Result:', result);
      if (result.status === 200) {
        console.log('Data:', result.data);
        setUserbookings(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logout = ()=>{
    sessionStorage.clear()
    navigate('/')
  }

  return (
    <>
      <div>
        <Header />

        <section style={{ overflow: "hidden" }} className="mt-4 ">
          <div className="row">
            <div
              style={{ height: "90vh" }}
              className="col-lg-2 bg-dark-subtle text-center"
            >
              <div className="pt-5">
                <h3 className="text-black mb-4">{username}</h3>
                <span>{email}</span><br />
              </div>
            </div>

            <div className="col-lg-1"></div>
            <div className="col-lg-7">
              <div className="mt-5">
                <div>
                  <div className="">
                    <button className="btn btn-primary ">
                      My Booking
                    </button>
                  </div>
                  {userbookings?.length > 0 ?
                    userbookings.slice().reverse().map((booking, index) => (
                      <div key={index} className="mt-4 mb-4">
                        <p className="pe-5 ">
                          Dear Customer, <br />
                          <p>Thank you for scheduling your appointment for {booking?.cutting} {booking?.coloring} {booking?.styling} services on {booking?.date}, at {booking?.time}. We are excited to see you and hope you have a wonderful experience with our team.</p>
                        </p>
                      </div>
                    ))
                    :
                    <div className="fs-2 mt-3 text-danger">No Bookings Yet!!!</div>
                  }
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <button onClick={logout} className="fw-bolder pe-1 btn">Logout <i className="fa-solid fa-arrow-right-from-bracket "></i></button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Profile;
