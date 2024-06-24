import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import service from "../images/service.jpg";
import { Form, FloatingLabel } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from "../server/allAPI";



function Auth({ insideRegister }) {
  const navigate = useNavigate();
  const [userInput,setUserInput] = useState({
    username:"",email:"",password:""
  })
  console.log(userInput);

  const handleRegister = async (e)=>{
    e.preventDefault()
   if (userInput.username && userInput.email && userInput.password) {
     //api
     // const{username,email,password}= userInput
     try{
       const result = await registerAPI(userInput)
       console.log(result);
       if (result.status==200) {
         toast.info(`welcome ${result.data.username} ... please Login to explore our website`)
         setUserInput({username:"",email:"",password:""})
         setTimeout(()=>{
          navigate('/login')
         }, 2000);
       }else{
         toast.success(result.response.data)
         setTimeout(()=>{
           setUserInput({username:"",email:"",password:""})
           navigate('/login')
         },2000)
       }
     }catch(err){
        console.log(err);
     }
   }else{
     toast.warning("please fill the Form completely!!!")
   }
 }

 const handleLogin = async(e)=>{
  e.preventDefault()
  if (userInput.email && userInput.password) {
    try{
       const result = await loginAPI(userInput)
       if (result.status==200){
        sessionStorage.setItem("exisitingUser",JSON.stringify(result.data.exisitingUser))
        sessionStorage.setItem("token",result.data.token)
        toast.info(`welcome ${result.data.exisitingUser.username}...`)
        setUserInput({username:"",email:"",password:""})
        setTimeout(()=>{
          setUserInput({username:"",email:"",password:""})
          navigate('/')
        },2000)

       }else{
        toast.error(result.response.data)
       }

    }catch(err){
     console.log(err);
    }
  }else{
    toast.warning("please fill the form compleletly!!!")
  }
}

  return (
    <>
      <div>
        <div
          className=" d-flex justify-content-center align-items-center bg-dark bg-gradient"
          style={{ width: "100%", height: "100vh" }}
        >
          <div className="container">
            <Link
              to={"/"}
              style={{ textDecoration: "none" }}
              className="fw-bolder text-white fs-5"
            >
              {" "}
              <i class="fa-solid fa-arrow-left-long"></i> Back to Home
            </Link>

            <div className="d-flex justify-content-center align-items-center">
              <div className=" rounded shadow p-5 bg-dark-subtle w-50 ">
                <div className=" align-items-center">
                  <h5
                    style={{
                      letterSpacing: "3px",
                      fontWeight: "700",
                      color: "black",
                    }}
                    className="text-center mb-3"
                  >
                    NuLook
                  </h5>
                  <h6 className="fw-bolder mt-2 mb-2 text-black-50 text-center">
                    Sign {insideRegister ? "up" : "in"} to your Account
                  </h6>
                  <Form>
                  {insideRegister && 
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Username"
                      className="mb-3 "
                    >
                      <Form.Control value={userInput.username} onChange={e=>setUserInput({...userInput,username:e.target.value})} type="text" placeholder="username" />
                    </FloatingLabel>
                   }
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className="mb-3 "
                    >
                      <Form.Control value={userInput.email} onChange={e=>setUserInput({...userInput,email:e.target.value})} type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                      <Form.Control  value={userInput.password} onChange={e=>setUserInput({...userInput,password:e.target.value})} type="password" placeholder="Password" />
                    </FloatingLabel>
                    </Form>
                  </div>
                  {insideRegister ? (
                    <div className="mt-3 mb-2">
                      <button onClick={handleRegister} className="btn btn-primary">Register</button>
                      <p className="mt-3">
                        Already have an Account? Click here to{" "}
                        <Link className="text-info" to={"/login"}>Login</Link>
                      </p>
                    </div>
                  ) : (
                    <div className="mt-3 mb-2">
                      <button onClick={handleLogin} className="btn btn-primary">Login</button>
                      <p className="mt-3">
                        Already have an Account? Click here to{" "}
                        <Link className="text-info" to={"/register"}>Register</Link>
                      </p>
                    </div>
                  )}
                  
              </div>
              
            </div>
            
          </div>
        </div>
        <ToastContainer  position='top-center' theme='colored' autoClose={3000}/>
      </div>
    </>
  );
}

export default Auth;
