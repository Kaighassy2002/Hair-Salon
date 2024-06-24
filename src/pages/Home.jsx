import React, { useEffect, useState } from "react";
import AOS from 'aos'
import'aos/dist/aos.css'
import '../css/home.css'
import Person from "../images/person2.jpg";
import Person2 from "../images/person3.jpg";
import bg from "../images/bg2.jpg";
import salon from "../images/saloan.jpg";
import card from "../images/card4.jpg";

import salon3 from "../images/salon3.avif";
import { Link } from "react-router-dom";

import CardFloting from "../components/CardFloting";
import Footer from "../components/Footer";
import Header from "../components/Header";


function Home() {
 useEffect(()=>{
  AOS.init()
 },[])
  return (
    <>
      <div>
        
       <div style={{backgroundImage: `url(${bg})`,
           height: "100vh",
           backgroundSize: "cover",backgroundAttachment:'fixed'}}>
            <Header/>
         
  
          <section style={{ height: "100vh" }}>
            <div  className="d-flex justify-content-evenly align-items-center ">
              <div>
                <img
                  className="pe-5 pb-4 "
                  style={{
                    height: "380px",
                    // backgroundImage:
                    //   "linear-gradient(90deg, rgba(145,144,140,1) 0%, rgba(45,44,44,1) 85%",
                  }}
                  src={Person2}
                  alt=""
                />
              </div>
  
              <div>
                <hr className="ms-5 me-5 fw-bold border-3 " />
                <h1 className="text-dark text-center pt-4 pb-4">
                  <span
                    style={{
                      fontFamily: ' "Asap", sans-serif',
                      letterSpacing: "3px",
                    }}
                  >
                    <span className="text1">GOOD HAIR DAYS</span>
                  </span>{" "}
                  <br /> <span>Just Got Better</span>
                </h1>
                <hr className="ms-5 me-5 fw-bold border-3" />
              </div>
              <div>
                {" "}
                <img
                  className="ps-5 pt-4"
                  style={{
                    height: "550px",
                    // backgroundImage:
                    //   "linear-gradient(90deg, rgba(145,144,140,1) 0%, rgba(45,44,44,1) 85%",
                  }}
                  src={Person}
                  alt=""
                />
              </div>
            </div>
            {/* <div style={{height:"40vh",width:"20%"}} className="ms-4 bg-dark .bg-gradient">
              </div> */}
          </section>
       </div>

       
       
        
        <section  style={{marginTop:"80px"}}>
          <div  className="d-flex justify-content-evenly rounded mb-5 ">
            
            <div   data-aos="fade-right"  style={{
                  height: "350px",
                  width:"40%",
                  backgroundColor:"#FAF9F6"
                }} className=" p-5 rounded " > 
              <h5
                style={{
                  letterSpacing: "3px",
                  fontWeight: "700",
                  color: "black",
                }}
                className="text-center brand"
              >
                NuLook
              </h5>
              <p  className="mb-4">
                a licensed professional trained to transform your hair while
                boosting your confidence <br />
                a person who is cut above the rest ,<br />
                adds colour to pepoles lives and creates incredable hairstyles
                for you <br /> a miracle worker who takes your hair from drab to
                fab
              </p>
              <Link to={'/booking'} style={{textDecoration:'none'}}>
              <button className="btn btn-outline-info d-grid  col-6 mx-auto">Take Appointment</button>
              </Link>
             
              
            </div>
              <div>
              <img className="rounded images" height={'300px'} src={salon3} alt="" />
              <div style={{height:"40vh",width:"87%",marginTop:'-53vh',marginLeft:"75%"}} className="bg-dark bg-opacity-25">
             
            </div>
              </div>
              <div>
              <img className="rounded images" height={'300px'} src={salon} alt="" />
              </div>
           
          </div>
        </section>


        <section className="text-center"  >
           
        <h2 className="mt-3 text-dark">Explore our Services</h2>
           <p style={{wordSpacing:'8.3px'}} className="mb-5 text-dark-emphasis ">a wonderful person who touches more hearts than hair</p>
           <CardFloting/>
           <p style={{wordSpacing:'8.3px'}} className="mb-5 text-body-secondary fs-4">Our team of skilled stylists. colour specialists, and  <br /> spa experts bring a wealth of expertise 
           to every appointment</p>
        </section>


        

       
      </div>
      <Footer/>
    </>
  );
}

export default Home;
