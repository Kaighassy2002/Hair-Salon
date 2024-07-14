import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
Link
function Header() {
  const [displayName,setdisplay] = useState("")
  const [loginStatus,setLoginStatus] = useState(false)
 useEffect(()=>{
  if(sessionStorage.getItem("token")) {
    setLoginStatus(true)
  }else{
    setLoginStatus(false)
  }
 },[])

 useEffect(()=>{
  if (sessionStorage.getItem("exisitingUser")) {
    const {username} = JSON.parse(sessionStorage.getItem("exisitingUser"))
    setdisplay(username)
  }else{
    setdisplay("")
  }
  },[])
  return (
    <>
       <div className="">
            <Navbar expand="lg" className="sticky-top" data-bs-theme="light">
              <Container>
                <Navbar.Brand className="ms-auto"
                  style={{ letterSpacing: "3px", fontWeight: "700" }}
                  
                >
                  NuLook
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                <Nav className="mx-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/services">Services</Link>
              <Link className="nav-link" to="/team">Team</Link>
              <Link className="nav-link" to="/booking">Booking</Link>
            </Nav>
                { loginStatus?
                <Link to={'/profile'}>
                <button className="btn ">
                  <i className="fa-solid fa-user border rounded-circle p-2"></i>{" "}
                  {displayName}
                </button>
                 </Link>:
                  <Link to={'/login'}>
                <button className="btn ">
                  <i className="fa-solid fa-user border rounded-circle p-2"></i>{" "}
                  Login
                </button>
                 </Link>}
                 </Navbar.Collapse>
              </Container>
            </Navbar>
            <hr className="ms-5 me-5 mt-1" />
          </div>
    </>
  )
}

export default Header
