import React from 'react'
import '../css/login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500&display=swap" rel="stylesheet" />
<div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 col-md-7 intro-section">
          <div class="brand-wrapper">
            <h1><a href="#!">Logo</a></h1>
          </div>
          <div class="intro-content-wrapper">
            <h1 class="intro-title">Welcome to Hue360 !</h1>
            <p class="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna</p>
            <Link to="/" class="btn btn-read-more">Read more</Link>
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
                <input type="email" name="email" id="email" class="form-control" placeholder="Email"/>
              </div>
              <div class="form-group mb-3">
                <label for="password" class="sr-only">Password</label>
                <input type="password" name="password" id="password" class="form-control" placeholder="Password" />
              </div>
              <div class="d-flex justify-content-between align-items-center mb-5">
                 <Link to='/'> <input name="login" id="login" class="btn login-btn" type="button" value="Login" /></Link>
                <a href="#!" class="forgot-password-link">Forgot Password?</a>
              </div>
            </form>           
            <p class="login-wrapper-footer-text">Need an account? <a href="#!" class="text-reset">Sign-up here</a></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
