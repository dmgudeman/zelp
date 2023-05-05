import car5 from "../../../../assets/images/car5.jpeg";


const Splash5 = (props) => {
    return (
        <>
            <div id="businessShowContainer111111">
                <div
                    style={{
                        backgroundImage:  `url(${car5})`,
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
                    <div className="carTitle1">Find Services</div>
                    <div className="carTitle1">FAST</div>
                    <div className="carTitleSpace"></div>
                    <div className="carTitle4">Plumbing</div>
                    
                </div>
            </div>
        </>
    );
};

export default Splash5;
