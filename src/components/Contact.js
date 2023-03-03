import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../styles.css'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
            `${process.env.REACT_APP_SERVICE_ID}`, 
            `${process.env.REACT_APP_TEMPLATE_ID}`, 
            form.current, 
            `${process.env.REACT_APP_PUBLIC_KEY}`
        )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text)
            
        });
    };

    return (
        <>
          <div className="full-screen-container">
            <div className="login-container">
              <h1 className="login-title">Get in contact with me</h1>
              <form className="form" ref={form} onSubmit={sendEmail}>
                <div className="input-group">
                  <label for="user_name">Name</label>
                  <input type="text" name="user_name" id="user_name"/>
                </div>

                <div className="input-group success">
                  <label for="user_email">Email</label>
                  <input type="email" name="user_email" />
                  <span className="msg">Valid email</span>
                </div>

                <div className="input-group error">
                  <label>Message</label>
                  <textarea name="message" />
                  <input className="send-button" type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </>
    )
}

export default Contact