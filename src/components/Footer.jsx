import React from 'react'
import '../css/footer.css'
function Footer() {
  return (
    <>
   
      <div className='p-3 bg-dark '>
        <div className='footer d-flex justify-content-evenly align-items-center footer-container flex-wrap'>
        
     <div>
       <p className="text-white fs-4"  > <span  style={{ letterSpacing: "3px", fontWeight: "700" }}>Nulook</span></p>
       <div className="d-flex justify-content-evenly">
          <a href="">
          <i className="fa-brands fa-whatsapp me-2  rounded-circle fs-4 p-2  hover-brand"></i>
          </a>
        <a href="">
        <i className="fa-brands fa-instagram me-2  rounded-circle fs-4 p-2 hover-brand "></i>
        </a>
        <a href="" ><i className="fa-brands fa-x-twitter rounded-circle fs-4 p-2 hover-brand"></i></a>
        
        </div>
     </div >
         <div className="text-white-50">
            <h3>Contact Us </h3>
            <p>nulook@gmail.com</p>
            <span>123 bulding nearst bank <br />675489</span>
            <p>+91 8907654321</p>
         </div>
       
        <div className="text-white-50">
          <h3>Subscribe</h3>
          <p>Enter Your email get notified about our new solutions</p>
          <input className="form-control "  type="text" placeholder="enter yor email" />
        </div>
      </div>
      <hr className="text-white-50 ps-2 pe-2 text-end"/>
      <p className="text-white text-end"  >© 2024 <span  style={{ letterSpacing: "3px", fontWeight: "700" }}>Nulook</span></p>
      </div>
    </>
  )
}

export default Footer
