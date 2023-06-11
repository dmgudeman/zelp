import car1 from "../../../../assets/images/car1.jpeg";
import "../../Caroursel/Carousel.css";

const Splash1 = ({ onLoad }) => {
    return (
        <>
            <div className="businessShowContainer1">
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
                    onLoad={onLoad}
                >
                    <div className="carTitle1">Find what you need</div>
                    <div className="carTitleSpace"></div>
                    <div className="carTitle444">Lawn Services</div>
                    <div className="carTitleSpace"></div>
                    <div className="carTitle2">Search By Catgeory</div>
                </div>
            </div>
        </>
    );
};

export default Splash1;
