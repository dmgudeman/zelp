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
                        alignItems: "end",
                        justifyContent: "start",

                        textShadow: "3px 3px #000",
                        zIndex: -1,
                    }}
                >
                    <div className="carTitle">Hi there</div>
                    
                </div>
            </div>
        </>
    );
};

export default Splash5;
