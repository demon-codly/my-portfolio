import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1nR43KPuym-M9_syqtRlJP6A0C-vyfSr1/view?usp=sharing';

  return (
    <div id="home" className="hero">
        <img src={profile_img} alt="Profile Image" className="profile-pic"/>
        <h1><span>I'm Sushanth,</span> software developer based in India.</h1>
        <p>I am Full-Stack Developer based in India, I am passionate about building dynamic and user-friendly web applications.</p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className="anchor-link" offet={50} href="#contact">Connect With Me</AnchorLink></div>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="hero-resume">
            My Resume
          </a>
        </div>
    </div>
  )
}

export default Hero