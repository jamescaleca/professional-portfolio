import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import '../styles.css'

function Contact({toggleModal}) {
    const form = useRef()

    const [sent, setSent] = useState(false)

    const toggleSent = () => {setSent(!sent)}

    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs.sendForm(
            `${process.env.REACT_APP_SERVICE_ID}`, 
            `${process.env.REACT_APP_TEMPLATE_ID}`, 
            form.current, 
            `${process.env.REACT_APP_PUBLIC_KEY}`
        )
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
            
        })
    };

    return (
        <>
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
              {sent ? (
                <div className="modal-content">
                  <h1>Thank you!</h1>
                  <h3>Your message has been sent.</h3>
                  <button className="modal-close" onClick={toggleModal}>Close</button>
                </div>
              ) : (
                <div className="modal-content">
                  <h1 className="login-title">Contact Me:</h1>
                  <form className="form" ref={form} onSubmit={sendEmail}>
                    <div className="input-group">
                      <label for="user_name">Name</label>
                      <input type="text" name="user_name" id="user_name"/>
                    </div>

                    <div className="input-group">
                      <label for="user_email">Email</label>
                      <input type="email" name="user_email" />
                      {/* <span className="msg">Valid email</span> */}
                    </div>

                    <div className="input-group">
                      <label>Message</label>
                      <textarea name="message" />
                      <input onClick={toggleSent} className="send-button" type="submit" value="Send" />
                    </div>
                  </form>
                </div>
              )}
          </div>
        </>
    )
}

export default Contact