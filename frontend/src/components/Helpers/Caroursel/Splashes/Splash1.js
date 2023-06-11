import { useState } from "react";
import car1 from "../../../../assets/images/car1.jpeg";
import "../../Caroursel/Carousel.css";

const Splash1 = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <>
            <div className="businessShowContainer1">
                <img
                    src={car1}
                    alt=""
                    style={{ display: "none" }}
                    onLoad={() => setIsLoaded(true)}
                />
                {isLoaded && (
                    <div
                        style={{
                            backgroundImage: `url(${car1})`,
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
                        <div className="carTitle1">Find what you need</div>
                        <div className="carTitleSpace"></div>
                        <div className="carTitle444">Lawn Services</div>
                        <div className="carTitleSpace"></div>
                        <div className="carTitle2">Search By Catgeory</div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Splash1;
