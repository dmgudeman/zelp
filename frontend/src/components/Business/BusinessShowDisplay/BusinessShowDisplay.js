// import { Link } from "react-router-dom";
import ZelpMap from "../../Maps/ZelpMap/ZelpMap";
import RatingDisplay from "../../Reviews/RatingDisplay/RatingDisplay";

import "./BusinessShowDisplay.css";
const BusinessShowDisplay = ({ business }) => {
    console.log(business.hours);
    return (
        <>
            <div className="rowContainer">
                <div id="BSDLgutter"></div>
                <div id="BSDCenter">
                    <div id="InfoContainer">
                        <RatingDisplay starClass="starDisplay" />
                        <div className="displayText" id="div1">
                            {business.cost}
                        </div>
                        <div className="displayText">{business.address}</div>
                        <div className="smallerText">{business.phone}</div>
                        <a href={`${business.website}`}>
                            {" "}
                            <div className="smallerText">
                                {business.website}
                            </div>
                        </a>
                    </div>
                    <div id="mapContainer">
                        <div id="mapLeft">
                            <ZelpMap
                                businesses={[business]}
                                className="zelpMap"
                            />
                        </div>
                        <div id="mapRight">
                            <div>{JSON.stringify(business.hours)}</div>
                        </div>
                    </div>
                </div>
                <div id="BSDRgutter"></div>
            </div>
        </>
    );
};

export default BusinessShowDisplay;
