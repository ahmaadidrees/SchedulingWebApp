import React from 'react';

const About = () => {
  return (
    <div id= "about" style={{height:"100vh"}}>
      <center>  
      <h1>About Us</h1>
      <img src="https://example.com/photo.jpg" alt="A photo of us" />
      <div>
        <h2>Our Story</h2>
        <p>Insert your bio text here.</p>
      </div>
      <div>
        <h2>Business Hours</h2>
        <p>Monday - Friday: 9:00am - 5:00pm</p>
        <p>Saturday - Sunday: Closed</p>
      </div>
      </center>
    </div>
  );
};

export default About;
