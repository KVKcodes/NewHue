import React from 'react'
import Navbar from './LandingComponents/Navbar'
import Masthead from './LandingComponents/Masthead'
import About from './LandingComponents/About'
import Projects from './LandingComponents/Projects'
import Contactus from './LandingComponents/Contactus'
// import '../css/styles.css'

export default function Landing() {
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
