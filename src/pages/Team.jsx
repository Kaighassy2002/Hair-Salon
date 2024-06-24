import React, { useEffect } from 'react'
import {  Button, Col, Container, Nav, Navbar, Row,Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import salon from "../images/hairstyle1.jpg";
import colour from "../images/color.jpg";
import technicians from "../images/tech.jpg";
import Footer from '../components/Footer';
import Header from '../components/Header';

function Team() {
  useEffect(()=>{
    AOS.init()
   },[])
  return (
    <>
       <div style={{overflow:'hidden'}}>
        <Header/>
         
          <section  className='bg-black mb-3 p-4'>
            <div className="p-3 text-center">
              <h4 style={{letterSpacing:"1.8rem"}} className='text-white-50 fs-2 bolder'>OUR TEAM</h4>
              <div className='d-flex justify-content-evenly p-4 mt-3'>
                <a href="#stylist"><Button  style={{letterSpacing:".4rem"}} variant="outline-light">Stylist</Button>{' '}</a>
              <a href="#colourists"><Button style={{letterSpacing:".4rem"}} variant="outline-light">Colourists</Button>{' '}</a>
              <a href="#technicians"><Button style={{letterSpacing:".4rem"}} variant="outline-light">Technicians</Button>{' '}</a>
              
              </div>
            </div>
          </section>
  
          <section>
            <Container className='mt-5'>
            <Row id='stylist' className='pt-3 pb-4'>
          <Col >
            <div data-aos="zoom-in" >
              <img  className='img-fluid' src={salon}alt="" />
              </div>
          </Col>
          <Col className='d-flex justify-content-center align-items-center flex-column' >
          <div data-aos="fade-left">
            <h4 className='text-secondary '>Stylist</h4>
            <p>In our salon, Nulook, we believe that a skilled hair stylist is the embodiment of artistry, technical prowess, and interpersonal finesse. With a deep understanding of hair dynamics and an impeccable eye for aesthetics, our stylists seamlessly transform hair into personalized works of art that reflect both their creative vision and the client's individuality. Beyond their mastery of scissors and color palettes, our stylists are expert communicators, adept at deciphering clients' desires and concerns to tailor each experience to perfection. Whether crafting intricate updos for special occasions or executing precision cuts for everyday elegance, their dedication to detail is unwavering. However, for us, it's not just about the hair—it's about fostering a sense of warmth and belonging. In our salon chair, transformations extend beyond the physical, empowering clients with newfound confidence and self-assurance. With each snip and stroke, our stylists weave not just strands of hair but also connections and transformations, leaving a lasting impression long after the salon visit ends.</p>
          </div>
          </Col>
        </Row>
        <Row id='colourists' className='mt-3 pt-3 pb-4'>
          <Col className='d-flex justify-content-center align-items-center flex-column'>
         <div data-aos="fade-right" >
            <h4 className='text-secondary' >Colourists</h4>
            <p>At Nulook, our proficient hair colorists are not just stylists, they're artists dedicated to transforming hair into stunning masterpieces. With a deep understanding of color theory and an eye for detail, they expertly blend shades to create bespoke hues tailored to each client's skin tone and personal style. From subtle balayage to bold fantasy colors, every application is approached with meticulous care and attention. Beyond technical skill, our colorists excel in communication, listening attentively to clients' desires and offering expert advice to achieve their hair color goals. A visit to our salon is more than just a makeover—it's a journey of self-expression and discovery. With our skilled colorists, clients emerge with hair that not only looks beautiful but also reflects their inner confidence and individuality.</p>
         </div>
          </Col>
          <Col>
          
         <div data-aos="zoom-in-down"> <img  className='img-fluid' src={colour}alt="" /></div>
          </Col>
        </Row>
        <Row id='technicians' className='mt-3 pt-3 pb-4'>
          <Col >
            <div data-aos="zoom-in" >
              <img  className='img-fluid' src={technicians}alt="" />
              </div>
          </Col>
          <Col className='d-flex justify-content-center align-items-center flex-column' >
          <div data-aos="fade-left">
            <h4 className='text-secondary'>Technicians</h4>
            <p>Welcome to Nulook, where our skilled hair technicians are the backbone of our establishment. With a profound understanding of hair anatomy and chemistry, they combine technical expertise with a passion for hair care to ensure that every client's tresses remain healthy, vibrant, and beautiful. From shampooing and conditioning to specialized treatments aimed at repairing damage and promoting hair growth, our technicians offer a comprehensive range of services tailored to each client's unique needs. Beyond their technical proficiency, our technicians excel in building trust and rapport with clients, providing attentive care and personalized attention. At Nulook, we believe that everyone deserves to look and feel their best, and with our talented team of hair technicians, you can trust that your hair is in capable hands, receiving the specialized care and attention it deserves to shine.</p>
          </div>
          </Col>
        </Row>
            </Container>
  
          </section>
       </div>
       <Footer/>
    </>
  )
}

export default Team
