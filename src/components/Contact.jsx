import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: ""
    })

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
				<input type="text" name="name" className="input" placeholder="Enter Your Name"></input>
				<input type="text" name="email" className="input" placeholder="Enter Your Email"></input>
				<textarea name="msg" id="msg" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
				<input type="submit" value="SEND" id="send"></input>
			</form>
	</section>
  )
}

export default Contact;