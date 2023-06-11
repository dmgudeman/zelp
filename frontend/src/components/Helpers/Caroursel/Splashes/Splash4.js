import car4 from "../../../../assets/images/car4.jpeg";

const Splash4 = ({ onLoad }) => {
    return (
        <>
            <div id="businessShowContainer1">
                <div
                    style={{
                        backgroundImage: `url(${car4})`,
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
                    <div className="carTitle44">Cuisine Type</div>
                    <div className="carTitleSpace"></div>
                    <div className="carTitle1">Eat Well</div>
                    <div className="carTitleSpace"></div>
                </div>
            </div>
        </>
    );
};

export default Splash4;
