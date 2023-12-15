import React from 'react'
// import '../css/login.css'
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
  auth.currentPage("/register");
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
              console.log("returned");
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
<div className="container-fluid">   
      <div className="row">
        <div className="col-sm-6 col-md-7 intro-section">
          <div className="brand-wrapper">
            {/* <img id='hue360Logo' src={hue360} alt="hue360Logo" /> */}
            <h1>Hue360</h1>
          </div>
          <div className="intro-content-wrapper">
            <h1 className="intro-title">Welcome to Hue360!</h1>
            <p className="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna</p>
            <Link to="" className="btn btn-read-more">Read more</Link>
          </div>
          <div className="intro-section-footer">
            <div className="footer-nav">
              <a href="#!">Facebook</a>
              <a href="#!">Twitter</a>
              <a href="#!">Gmail</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-5 form-section">
          <div className="login-wrapper">
            <h2 className="login-title">Register</h2>
            <form action="">
                <div className="form-group">
                <label htmlFor="name" className="sr-only">Username</label>
                <input type="name" name="name" id="name" className="form-control" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password" className="sr-only">Password</label>
                <input type="password" name="password" id="password" className="form-control" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} required/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="re-password" className="sr-only">Confirm Password</label>
                <input type="password" name="re-password" id="re-password" className="form-control" placeholder="Re-type password" value={repass} onChange={(e) => setRepass(e.target.value)} required/>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-5">
                <input name="login" id="login" className="btn login-btn" type="button" value="Register" onClick={handleOnSubmit}/>
                <a href="#!" className="forgot-password-link">Forgot Password?</a>
              </div>
            </form>           
            <p className="login-wrapper-footer-text">Already have an account? <Link to="/login" className="text-reset">Login here</Link></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
