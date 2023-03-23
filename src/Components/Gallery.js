import React from 'react';
import './Gallery.css';
import GalleryItem from './GalleryItem';
const images = [
  {
    src: '/Images/image1.JPG',
    caption: 'Image 1'
  },
  {
    src: '/Images/image2.JPG',
    caption: 'Image 2'
  },
  {
    src: '/Images/image3.JPG',
    caption: 'Image 3'
  },
  {
    src: '/Images/image4.JPG',
    caption: 'Image 4'
  },
  {
    src: '/Images/image5.JPG',
    caption: 'Image 5'
  },
  {
    src: '/Images/image6.JPG',
    caption: 'Image 6'
  }
];

const Gallery = () => {
  return (
    <div id='gallery' className="gallery">
        <center><h1>Gallery</h1>
        <br/></center>
      {images.map((image, index) => (
        <GalleryItem key={index} image={image} />
      ))}
    </div>
  );
};

export default Gallery;
