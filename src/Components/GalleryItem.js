import React from 'react';

const GalleryItem = ({ image }) => {
  return (
    <div className="gallery-item">
      <img src={image.src} alt={image.caption} />
      <div className="caption">{image.caption}</div>
    </div>
  );
};

export default GalleryItem;
