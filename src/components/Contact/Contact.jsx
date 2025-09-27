import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6f9b1144-7d08-4508-bcc7-82295cbd9da0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


  return (
    <div id="contact" className="contact">
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt=""/> <p>sushanth.athakur@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt=""/> <p>TamilNadu, India</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor="">Type Your Message Here..</label>
            <textarea rows="8" placeholder='Enter your message' name='message'></textarea>
            <button type='submit' className='contact-submit'>Send Message</button>
          </form>
        </div>
    </div>
  )
}

export default Contact
