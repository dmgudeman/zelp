import car1 from "../../../../assets/images/car1.jpeg";
import "../../Caroursel/Carousel.css";


const Splash1 = (props) => {
    return (
        <>
            <div className="businessShowContainer1">
                <div
                    style={{
                        backgroundImage:  `url(${car1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        height: "100vh",
                        display: "flex",
                        alignItems: "end",
                        justifyContent: "start",

                        textShadow: "3px 3px #000",
                        zIndex: -1,
                    }}
                >
                     <div className="carTitle">Hi TTTTccccccccc</div>
                    {/* <div className="businessName" >{business.name}</div> */}
                </div>
            </div>
        </>
    );
};

export default Splash1;
