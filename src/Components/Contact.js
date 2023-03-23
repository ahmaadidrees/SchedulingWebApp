import React, { useState } from 'react';
import "./Contact.css"
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Add code here to send the form data to your backend or email service
  };

  return (
    <div id = "contact" style={{height:"100vh"}}>
      <center>
      <h1>Contact Us</h1></center>  
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={handleMessageChange}></textarea>

        <button type="submit">Submit</button>
      </form>

      <a href="https://www.instagram.com/your_instagram_handle/">Instagram</a>
    </div>
  );
}

export default Contact;
