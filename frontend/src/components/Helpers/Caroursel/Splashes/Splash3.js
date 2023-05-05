import car3 from "../../../../assets/images/car3.jpeg";


const Splash3 = (props) => {
    return (
        <>
            <div id="businessShowContainer1">
                <div
                    style={{
                        backgroundImage:  `url(${car3})`,
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
                    {/* <div className="businessName" >{business.name}</div> */}
                </div>
            </div>
        </>
    );
};

export default Splash3;
