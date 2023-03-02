import React, { useRef } from 'react'
// import { useHistory } from 'react-router-dom'
// import axios from 'axios'
// import Navbar from './Navbar'
import emailjs from '@emailjs/browser';
import '../styles.css'

function Contact() {
    // const initInputs = 
    // {
    //     name: '',
    //     email: '',
    //     message: ''
    // }

    // const [inputs, setInputs] = useState(initInputs)
    // const [contacts, setContacts] = useState([])
    // const history = useHistory()

    // function submitBtnRedirect() {
    //     history.push('/')
    //     alert("Thank you for submitting the form! I'll look forward to speaking with you soon.")
    // }

    // function handleChange(e) {
    //     const { name, value } = e.target
    //     setInputs(prevInputs => ({...prevInputs, [name]: value}))
    //     console.log('inputs', inputs)
    // }

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     setInputs(initInputs)
    //     submitBtnRedirect()
    // }

    // function postContact(newContact) {
    //     console.log('post new contact message', newContact)
    //     axios.post('/contact', newContact)
    //         .then(res => {
    //             setContacts(prevContacts => [...prevContacts, res.data])
    //         })
    //         .catch(err => console.log(err))
    // }

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
            process.env.SERVICE_ID, 
            process.env.TEMPLATE_ID, 
            form.current, 
            process.env.PUBLIC_KEY
        )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </>
    )
}

export default Contact