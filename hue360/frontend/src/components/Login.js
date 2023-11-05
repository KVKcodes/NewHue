import React from 'react'
import '../css/login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';
// import hue360 from '../assets/img/hue350.png'

export default function Login() {
  const next= useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const auth= useAuth();
  auth.logout()
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/loginCheck', { email, pass });

      if (response.data === "fal") {
        alert("Wrong password");
      } else {
        // Assuming the response contains user information, pass it to login
        auth.login(response.data);
        auth.logmail(email)
        console.log(email+"atLogin")
        next("/");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while logging in");
    }
  };

  const handleOnSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/registerCheck', {email})
        .then(result => {
          console.log("registerCheck" + result.data)
          if(result.data==="exist"){
            handleLogin();
          }
          else {
            alert("The given mail is not registered")
          }
        })
        .catch(err=>console.log(err))
      setEmail("")
      setPass("")
}

  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500&display=swap" rel="stylesheet" />
<div class="container-fluid">   
      <div class="row">
        <div class="col-sm-6 col-md-7 intro-section">
          <div class="brand-wrapper">
            {/* <img id='hue360Logo' src={hue360} alt="hue360Logo" /> */}
            <h1>Hue360</h1>
          </div>
          <div class="intro-content-wrapper">
            <h1 class="intro-title">Welcome to Hue360!</h1>
            <p class="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna</p>
            <Link to="" class="btn btn-read-more">Read more</Link>
          </div>
          <div class="intro-section-footer">
            <na class="footer-nav">
              <a href="#!">Facebook</a>
              <a href="#!">Twitter</a>
              <a href="#!">Gmail</a>
            </na>
          </div>
        </div>
        <div class="col-sm-6 col-md-5 form-section">
          <div class="login-wrapper">
            <h2 class="login-title">Sign in</h2>
            <form action="#!">
              <div class="form-group">
                <label for="email" class="sr-only">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div class="form-group mb-3">
                <label for="password" class="sr-only">Password</label>
                <input type="password" name="password" id="password" class="form-control" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)}/>
              </div>
              <div class="d-flex justify-content-between align-items-center mb-5">
                 <Link to='/'> <input name="login" id="login" class="btn login-btn" type="button" value="Login" onClick={handleOnSubmit}/></Link>
                <Link to="/ForgotPassword" class="forgot-password-link">Forgot Password?</Link>
               
              </div>
            </form>           
            <p class="login-wrapper-footer-text">Need an account? <Link to="/register" class="text-reset">Sign-up here</Link></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
