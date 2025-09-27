import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img_full from '../../assets/profile_img_full.jpg'

const About = () => {
  return (
    <div id="about" className="about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img_full} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>As a B.Tech graduate and software developer, my goal is to build high-quality digital products. My technical toolkit is versatile, featuring strong skills in Java, as well as full-stack proficiency with React and Node.js</p>
                    <p>This allows me to develop and deploy cohesive applications across web, desktop, and mobile platforms. I am eager to join a forward-thinking team where I can solve complex problems and contribute to building exceptional software.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Java</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>React.js</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Node.js</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Express.js</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>RESTful APIs</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>MongoDB</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Deployment</p><hr style={{width:"100%"}}/></div>
                    <div className="about-skill"><p>Cloud Computing</p><hr style={{width:"60%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE IN PROJECTS</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>7+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            
        </div>
    </div>
  )
}

export default About