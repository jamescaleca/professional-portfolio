import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import '../styles.css'

function Contact({toggleModal}) {
    const form = useRef()

    const [sent, setSent] = useState(false)

    const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    // const [error, setError] = useState(null)

    const [values, setValues] = useState({ email: "" })
    const [errors, setErrors] = useState({})

    const isEmail = (email) => {
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    }

    const sendEmail = (e) => {
      e.preventDefault()
      
      const errors = {}
      const toggleSent = () => {setSent(!sent)}

      if (!isEmail(values.email)) {
        errors.email = "Wrong email format"
      }
   
      setErrors(errors)
   
      if (!Object.keys(errors).length) {
        alert(JSON.stringify(values.email, null, 2))
      }

      
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

    // const validateEmail = (inputText) => {
    //   const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //   if(inputText.value.match(mailFormat)){
    //     alert("Valid email address!")
    //     document.form1.text1.focus()
    //     return true
    //   } else {
    //     alert("You have entered an invalid email address!")
    //     document.form1.text1.focus()
    //     return false
    //   }
    // }

   
    const setEmailValue = (e) => {
      setValues((values) => ({ ...values, email: e.target.value }))
    }

    // const handleChange = (event) => {
    //   if (!isValidEmail(event.target.value)) {
    //     setError('Email is invalid')
    //   } else {
    //     setError(null)
    //   }
  
    //   setEmail(event.target.value)
    // }

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
                        type="text" 
                        name="user_email" 
                        value={values.email}
                        onChange={setEmailValue}
                        required
                      /> {" "}
                      {/* {error && <h2 style={{color: 'red'}}>{error}</h2>} */}
                      {/* <span className="msg">Valid email</span> */}
                    </div>

                    {Object.entries(errors).map(([key, error]) => (
                      <span
                        key={`${key}: ${error}`}
                        style={{
                          fontWeight: "bold",
                          color: "red"
                        }}
                      >
                        {error}
                      </span>
                    ))}

                    <div className="input-group">
                      <label htmlFor='message' >Message</label>
                      <textarea 
                        name="message" 
                        value={message}
                        onChange={(event) => {
                          setMessage(event.target.value)
                        }}
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