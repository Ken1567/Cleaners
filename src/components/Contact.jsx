import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: ""
    })

    const onChange = e => {     
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const { name, email, message } = inputs

    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {

            const body = { name, email, message }

            const response = await fetch(
                "https://api.ahglab.com/apidoc:fXznCvvM",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            )
            if (!response.ok) {
                return alert("Invalid Input")
            } else {
                return alert("Success")
            }
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <section id="contact">
            <h1 className="text-center fw-bolder">Contact Us</h1>
            <p className="text-center"><b>Email: cleaners@gmail.com</b> <br /> <b>Phone:</b> 0912-345-6789</p>
            <form onSubmit={onSubmitForm} className="form">
				    <input type="text"
                    className="input"
                    placeholder="Enter Your Name"
                    name="name" required
                    value={name} 
                    onChange={e => onChange(e)}/>

				    <input type="text" 
                    className="input" 
                    placeholder="Enter Your Email" 
                    name="email" required
                    value={email} 
                    onChange={e => onChange(e)}/>

				    <textarea
                    id="message" required 
                    cols="30" rows="10" 
                    placeholder="Enter Your Message"
                    name="message"
                    value={message} 
                    onChange={e => onChange(e)}/>

                    <button id="send">
                        Submit
                    </button>
			</form>
	</section>
  )
}

export default Contact;