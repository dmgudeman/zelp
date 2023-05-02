import React, { useState, useEffect } from "react";
import car1 from "../../../assets/images/car1.jpeg";
import car2 from "../../../assets/images/car2.jpeg";
import car3 from "../../../assets/images/car3.jpeg";
import car4 from "../../../assets/images/car4.jpeg";
import car5 from "../../../assets/images/car5.jpeg";
import "./Carousel.css";

const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    const images = [car1, car2, car3, car4, car5];

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false);
            setTimeout(() => {
                setCurrentImage(
                    currentImage === images.length - 1 ? 0 : currentImage + 1
                );

                setFadeIn(true);
            }, 300);
        }, 6000);
        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <div className="slider">
            {images.map((image, index) => (
                <img
                    key={image}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={`slide ${
                        index === currentImage ? "active" : ""
                    }`}
                    style={{
                        animation: `${
                            index === currentImage && fadeIn
                                ? "fadeIn"
                                : "fadeOut"
                        } 2s linear forwards`,
                    }}
                />
            ))}
        </div>
    );
};

export default Carousel;


// animation-name: fadeIn; /* animation name refers to the name of the keyframe */
// animation-duration: 1s; /* duration of one animation lap */
// animation-timing-function: linear; /* defines the accelaration curve for the animation */
// /* animation-delay: 0s; */
// /* animation-iteration-count: 1; */
// /* animation-direction: ; */
// animation-fill-mode: forwards;

// animation short hand:
// animation: name duration timing-function delay iteration-count direction fill-mode


// import { useState } from "react";

// function ImageSlider() {
//   const [currentImage, setCurrentImage] = useState(0);
//   const images = [car1,  car2, car3, car4, car5];

//   const handleNextImage = () => {
//     const nextImage = currentImage === images.length - 1 ? 0 : currentImage + 1;
//     setCurrentImage(nextImage);
//   };

//   return (
//     <div className="slider">
//       {images.map((image, index) => (
//         <img
//           key={image}
//           src={image}
//           alt={`Image ${index + 1}`}
//           className={`slide ${index === currentImage ? "active" : ""}`}
//           style={{
//             animation: `${
//               index === currentImage ? "fadeIn" : "fadeOut"
//             } 1s linear forwards`,
//           }}
//         />
//       ))}
//       <button onClick={handleNextImage}>Next Image</button>
//     </div>
//   );
// }

// export default ImageSlider;
