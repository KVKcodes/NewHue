import React from 'react'
import Navbar from './LandingComponents/Navbar'
import Masthead from './LandingComponents/Masthead'
import About from './LandingComponents/About'
import Projects from './LandingComponents/Projects'
import Contactus from './LandingComponents/Contactus'
import { useAuth } from "./auth";
// import '../css/styles.css'

export default function Landing() {
  const auth= useAuth()
  auth.currentPage("/")
  return (
    <div>
      <Navbar />
      <Masthead />
      <About />
      <Projects />
      <Contactus />
    </div>
  )
}
