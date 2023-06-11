import { useState } from "react";
import car2 from "../../../../assets/images/car2.jpeg";
import "../../Caroursel/Carousel.css";

const Splash2 = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <>
            <div id="businessShowContainer1">
                <img
                    src={car2}
                    alt=""
                    style={{ display: "none" }}
                    onLoad={() => setIsLoaded(true)}
                />
                {isLoaded && (
                    <div
                        style={{
                            backgroundImage: `url(${car2})`,
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
                        <div className="carTitle4">Lumber</div>
                        <div className="carTitleSpace"></div>
                        <div className="carTitle1">Be a</div>
                        <div className="carTitle1">Do it your selfer!</div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Splash2;
