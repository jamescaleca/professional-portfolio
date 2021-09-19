import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import axios from 'axios'
// import Navbar from './Navbar'
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

    return (
        <>
            <h1>Contact me here:</h1>
            <h3>jacaleca2@gmail.com</h3>
        </>
    )
}

export default Contact