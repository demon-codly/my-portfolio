import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className="hero">
        <img src={profile_img} alt="Profile Image" className="profile-pic"/>
        <h1><span>I'm Sushanth,</span> software developer based in India.</h1>
        <p>I am Full-Stack Developer based in India, I am passionate about building dynamic and user-friendly web applications.</p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className="anchor-link" offet={50} href="#contact">Connect With Me</AnchorLink></div>
          <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero