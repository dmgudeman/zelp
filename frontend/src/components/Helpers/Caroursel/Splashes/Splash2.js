import car2 from "../../../../assets/images/car2.jpeg";


const Splash2 = (props) => {
    return (
        <>
            <div id="businessShowContainer1">
                <div
                    style={{
                        backgroundImage:  `url(${car2})`,
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
                    <div className="carTitle">Hi TTTTTTHHHHEEERRREEE</div>
                    {/* <div className="businessName" >{business.name}</div> */}
                </div>
            </div>
        </>
    );
};

export default Splash2;
