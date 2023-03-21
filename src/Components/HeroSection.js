import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/Images/haircutSampleOne.jpeg', '/Images/haircutSampleTwo.jpeg', '/Images/haircutSampleThree.jpeg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className="hero-section">
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div key={index} className={`slide ${index === currentImageIndex ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <button className="book-now">Book Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
