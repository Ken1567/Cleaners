import React from 'react'

const Contact = () => {
  return (
        <section id="contact">
            <h1 class="text-center fw-bolder">Contact Us</h1>
            <p class="text-center"><b>Email: cleaners@gmail.com</b> <br /> <b>Phone:</b> 0912-345-6789</p>
            <form action="" class="form">
				<input type="text" name="name" class="input" placeholder="Enter Your Name"></input>
				<input type="text" name="name" class="input" placeholder="Enter Your Email"></input>
				<textarea name="msg" id="msg" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
				<input type="submit" value="SEND" id="send"></input>
			</form>
	    </section>
  )
}

export default Contact;