import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am Full-Stack Developer based in India, I am passionate about building dynamic and user-friendly web applications.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr className="footer-hr"/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">Copyright {new Date().getFullYear()} © Sushanth Thakur All Right Reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer 