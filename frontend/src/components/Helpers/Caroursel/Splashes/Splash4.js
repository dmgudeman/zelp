import { useState } from "react";
import car4 from "../../../../assets/images/car4.jpeg";
import "../../Caroursel/Carousel.css";

const Splash4 = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <>
            <div id="businessShowContainer1">
                <img
                    src={car4}
                    alt=""
                    style={{ display: "none" }}
                    onLoad={() => setIsLoaded(true)}
                />
                {isLoaded && (
                    <div
                        style={{
                            backgroundImage: `url(${car4})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            height: "100vh",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textShadow: "4px 4px #000",
                            zIndex: -1,
                        }}
                    >
                        <div className="carTitle44">Cuisine Type</div>
                        <div className="carTitleSpace"></div>
                        <div className="carTitle1">Eat Well</div>
                        <div className="carTitleSpace"></div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Splash4;
