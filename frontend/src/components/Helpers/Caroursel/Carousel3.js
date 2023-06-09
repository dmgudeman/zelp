import React, { useState, useEffect, useRef } from "react";
import Splash1 from './Splashes/Splash1';
import Splash2 from './Splashes/Splash2';
import Splash3 from './Splashes/Splash3';
import Splash4 from './Splashes/Splash4';
import Splash5 from './Splashes/Splash5';

const Carousel = () => {
    const [currentSplash, setCurrentSplash] = useState(0);
    const startTime = useRef(Date.now());
    const splashes = [
        { component: Splash1, altText: "Image 1" },
        { component: Splash2, altText: "Image 2" },
        { component: Splash3, altText: "Image 3" },
        { component: Splash4, altText: "Image 4" },
        { component: Splash5, altText: "Image 5" },
    ];

    const loop = () => {
        const index = Math.floor(((Date.now() - startTime.current) / 6000) % splashes.length);
        setCurrentSplash(index);
        requestAnimationFrame(loop);
    };

    useEffect(() => {
        loop();
        return () => cancelAnimationFrame(loop);
    }, []);

    return (
        <div className="slider">
            {splashes.map((splash, index) => {
                const Component = splash.component;
                return (
                    <div
                        key={index}
                        className={`slide ${index === currentSplash ? "active" : ""}`}
                    >
                        <Component alt={splash.altText} />
                    </div>
                );
            })}
        </div>
    );
};

export default Carousel;
