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
            <Navbar className="sticky-top" data-bs-theme="light">
              <Container>
                <Navbar.Brand
                  style={{ letterSpacing: "3px", fontWeight: "700" }}
                  
                >
                  NuLook
                </Navbar.Brand>
                <Nav className="">
                  <Link className=" navbar-link" style={{textDecoration:'none'}} to={'/'} ><a  >Home</a></Link>
                  <Link className=" navbar-link" style={{textDecoration:'none'}} to={'/services'}> <a >Services</a></Link>
                  <Link className=" navbar-link" style={{textDecoration:'none'}} to={'/team'}><Nav >Team</Nav></Link>
                  <Link className=" navbar-link" style={{textDecoration:'none'}} to={'/booking'}> <a >Booking</a></Link>
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
                
              </Container>
            </Navbar>
            <hr className="ms-5 me-5 mt-1" />
          </div>
    </>
  )
}

export default Header
