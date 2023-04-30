import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your CSS file

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
        setFadeIn(true);
      }, 1000);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Image ${index + 1}`}
          className={`slide ${index === currentImage ? 'active' : ''}`}
          style={{ animation: `${fadeIn ? 'fadeIn' : 'fadeOut'} 1s linear forwards` }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;