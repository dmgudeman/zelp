import car2 from "../../../../assets/images/car2.jpeg";

const Splash2 = ({ onLoad }) => {
    return (
        <>
            <div id="businessShowContainer1">
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
                    onLoad={onLoad}
                >
                    {" "}
                    <div className="carTitle4">Lumber</div>
                    <div className="carTitleSpace"></div>
                    <div className="carTitle1">Be a</div>
                    <div className="carTitle1">Do it your selfer!</div>
                </div>
            </div>
        </>
    );
};

export default Splash2;
