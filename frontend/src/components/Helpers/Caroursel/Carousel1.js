import React, { useState, useEffect } from "react";
import Splash1 from '../Caroursel/Splashes/Splash1';
import Splash2 from '../Caroursel/Splashes/Splash2';
import Splash3 from '../Caroursel/Splashes/Splash3';
import Splash4 from '../Caroursel/Splashes/Splash4';
import Splash5 from '../Caroursel/Splashes/Splash5';


const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    const images = [
        { component: Splash1, altText: "Image 1" },
        { component: Splash2, altText: "Image 2" },
        { component: Splash3, altText: "Image 3" },
        { component: Splash4, altText: "Image 4" },
        { component: Splash5, altText: "Image 5" },
        
    ];

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
            {images.map((image, index) => {
                const Component = image.component;
                return (
                    <div
                        key={index}
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
                    >
                        <Component alt={image.altText} />
                    </div>
                );
            })}
        </div>
    );
};

export default Carousel;