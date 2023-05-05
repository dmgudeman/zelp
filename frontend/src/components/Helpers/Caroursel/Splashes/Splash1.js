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
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textShadow: "3px 3px #000",
                        zIndex: -1,
                    }}
                >    
                     <div className="carTitle1">Find what you need</div> 
                     <div className="carTitle2">Search By Catgeory</div>
                     <div className="carTitleSpace"></div>  
                     <div className="carTitle4">Lawn Services</div>
                    {/* <div className="businessName" >{business.name}</div> */}
                </div>
            </div>
        </>
    );
};

export default Splash1;
