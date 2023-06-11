import car3 from "../../../../assets/images/car3.jpeg";

const Splash3 = ({ onLoad }) => {
    return (
        <>
            <div id="businessShowContainer1">
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
                    onLoad={onLoad}
                >
                    <div className="carTitle1">Be Healthy</div>
                    <div className="carTitleSpace"></div>
                    <div className="carTitleSpace"></div>
                    <div className="carTitle4">Fresh Produce</div>
                </div>
            </div>
        </>
    );
};

export default Splash3;
