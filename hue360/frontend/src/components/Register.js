import React from 'react'
import '../css/login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';
// import hue360 from '../assets/img/hue350.png'

export default function Register() {
  const next= useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRepass] = useState("");
  const auth= useAuth();
  const handleOnSubmit = (e) => {
      e.preventDefault();
    if(name.length!==1||email.length!==1||pass.length!==1||repass.length!==1){
    if(pass===repass){
      if(pass.length>7){
        axios.post('http://localhost:8000/registerCheck', {email})
          .then(result => {
            if(result.data==="exist"){
              alert("This email has already been registered")
            }
            else{
              // axios.post('http://localhost:8000/register', {name, email, pass}).then(res=>{next('/')}).catch(err=>console.log(err))
              axios.post('http://localhost:8000/register', {name, email, pass})
              auth.login(name)
              auth.logmail(email)
              next("/");
            }
          })
          .catch(err=>console.log(err))
        setName("")
        setEmail("")
        setPass("")
        setRepass("")
      }
      else {
        alert("Password needs to have atleast 8 characters")
        setPass("")
        setRepass("")
      }
    }
    else{
      alert("The passwords do not match")
      setPass("")
      setRepass("")
    }
  }
  else{
    alert("All values must be filled!")
  }
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
            <h2 class="login-title">Register</h2>
            <form action="">
                <div class="form-group">
                <label for="name" class="sr-only">Username</label>
                <input type="name" name="name" id="name" class="form-control" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} required/>
              </div>
              <div class="form-group">
                <label for="email" class="sr-only">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div class="form-group mb-3">
                <label for="password" class="sr-only">Password</label>
                <input type="password" name="password" id="password" class="form-control" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} required/>
              </div>
              <div class="form-group mb-3">
                <label for="re-password" class="sr-only">Confirm Password</label>
                <input type="password" name="re-password" id="re-password" class="form-control" placeholder="Re-type password" value={repass} onChange={(e) => setRepass(e.target.value)} required/>
              </div>
              <div class="d-flex justify-content-between align-items-center mb-5">
                <input name="login" id="login" class="btn login-btn" type="button" value="Register" onClick={handleOnSubmit}/>
                <a href="#!" class="forgot-password-link">Forgot Password?</a>
              </div>
            </form>           
            <p class="login-wrapper-footer-text">Already have an account? <Link to="/login" class="text-reset">Login here</Link></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
