import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import '../styles.css'

function Contact({toggleModal}) {
  const form = useRef()

  const [sent, setSent] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  const sendEmail = (e) => {
    e.preventDefault()
    const toggleSent = () => {setSent(!sent)}

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
      toggleSent()
  }

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
                  <label htmlFor="user_name">Name</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    id="user_name" 
                    value={name} 
                    onChange={(event) => { 
                      setName(event.target.value)
                    }}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="user_email">Email</label>
                  <input 
                    id="email" 
                    type="email" 
                    name="user_email" 
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value)
                    }}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor='message' >Message</label>
                  <textarea 
                    name="message" 
                    value={message}
                    onChange={(event) => {
                      setMessage(event.target.value)
                    }}
                    required
                  />
                  <input className="send-button" type="submit" value="Send" />
                </div>

              </form>
            </div>
          )}
      </div>
    </>
  )
}

export default Contact