import React, { useState, useEffect } from "react";
import Splash1 from './Splashes/Splash1';
import Splash2 from './Splashes/Splash2';
import Splash3 from './Splashes/Splash3';
import Splash4 from './Splashes/Splash4';
import Splash5 from './Splashes/Splash5';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [loading, setLoading] = useState(true);
    
    const images = [
        { component: Splash1, altText: "Image 1", src: "../../../../images/car1.jpeg" },
        { component: Splash2, altText: "Image 2", src: "../../../../images/car2.jpeg" },
        { component: Splash3, altText: "Image 3", src: "../../../../images/car3.jpeg" },
        { component: Splash4, altText: "Image 4", src: "../../../../images/car4.jpeg" },
        { component: Splash5, altText: "Image 5", src: "../../../../images/car5.jpeg" },
    ];

    useEffect(() => {
        Promise.all(images.map(image => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = image.src;
                img.onload = resolve;
                img.onerror = reject;
            });
        })).then(() => {
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            // handle error, set loading false anyway or show an error message
            setLoading(false);
        });

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
            {loading ? <LoadingSpinner loading={loading} /> : 
            <div
                className={`slide active`}
                style={{
                    animation: `fadeIn 0.5s linear forwards`,
                }}
            >
                <Component alt={images[currentImage].altText} />
            </div>}
        </div>
    );
};

export default Carousel;
