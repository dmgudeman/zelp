import { useState } from "react";
import car3 from "../../../../assets/images/car3.jpeg";
import "../../Caroursel/Carousel.css";

const Splash3 = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <>
            <div id="businessShowContainer1">
                <img
                    src={car3}
                    alt=""
                    style={{ display: "none" }}
                    onLoad={() => setIsLoaded(true)}
                />
                {isLoaded && (
                    <div
                        style={{
                            backgroundImage: `url(${car3})`,
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
                        <div className="carTitle1">Be Healthy</div>
                        <div className="carTitleSpace"></div>
                        <div className="carTitleSpace"></div>
                        <div className="carTitle4">Fresh Produce</div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Splash3;
