import React, { useState, useEffect } from "react";
import Splash1 from './Splashes/Splash1';
import Splash2 from './Splashes/Splash2';
import Splash3 from './Splashes/Splash3';
import Splash4 from './Splashes/Splash4';
import Splash5 from './Splashes/Splash5';

const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0);
    
    const images = [
        { component: Splash1, altText: "Image 1" },
        { component: Splash2, altText: "Image 2" },
        { component: Splash3, altText: "Image 3" },
        { component: Splash4, altText: "Image 4" },
        { component: Splash5, altText: "Image 5" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(
                currentImage === images.length - 1 ? 0 : currentImage + 1
            );
        }, 6000);

        return () => clearInterval(interval);
    }, [currentImage, images.length]);

    const Component = images[currentImage].component;

    return (
        <div className="slider">
            <div
                className={`slide active`}
                style={{
                    animation: `fadeIn 0.5s linear forwards`,
                }}
            >
                <Component alt={images[currentImage].altText} />
            </div>
        </div>
    );
};

export default Carousel;