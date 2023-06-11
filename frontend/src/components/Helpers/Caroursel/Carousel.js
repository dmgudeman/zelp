import React, { useState, useEffect, useRef } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Splash1 from "./Splashes/Splash1";
import Splash2 from "./Splashes/Splash2";
import Splash3 from "./Splashes/Splash3";
import Splash4 from "./Splashes/Splash4";
import Splash5 from "./Splashes/Splash5";

// there was a problem with the splashes showing up half baked when
// the app started.  I added hidden image loading state on each
// of the splashes and the count in the state of the splashes in
// the Carousel. A loading spinner is shown until all are loaded

const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedImages, setLoadedImages] = useState(0);
    const interval = useRef();
    const splashes = [
        { component: Splash1, altText: "Image 1" },
        { component: Splash2, altText: "Image 2" },
        { component: Splash3, altText: "Image 3" },
        { component: Splash4, altText: "Image 4" },
        { component: Splash5, altText: "Image 5" },
    ];

    useEffect(() => {
        interval.current = setInterval(() => {
            setFadeIn(false);
            setTimeout(() => {
                setCurrentImage(
                    currentImage === splashes.length - 1 ? 0 : currentImage + 1
                );

                setFadeIn(true);
            }, 100);
        }, 6000);
        return () => clearInterval(interval.current);
    }, [currentImage]);

    const handleImageLoad = () => {
        setLoadedImages((prev) => prev + 1);
        if (loadedImages >= splashes.length - 1) {
            setIsLoading(false);
        }
    };

    return (
        <div className="slider">
            {isLoading ? <LoadingSpinner /> : null}
            {splashes.map((image, index) => {
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
                            } 0.5s linear forwards`,
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
