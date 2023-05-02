// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ZelpMap from "../../Maps/ZelpMap/ZelpMap";
import RatingDisplay from "../../Reviews/RatingDisplay/RatingDisplay";

import "./BusinessShowDisplay.css";
const BusinessShowDisplay = ({ business }) => {
    // const [hours, setHours] = useState("");
    // let x = JSON.stringify(business.hours);
    let y = Object.entries(business.hours);

    // console.log('xxxxxx', x);
    // console.log('yyyyyy',y);

    // console.log('fffffff', y[0][0], y[0][1]['time'])
    //    console.log('ggggg', JSON.stringify(y[1][1]['time']))

    const processHours = (y) => {
        let str = "";

        for (let i = 0; i < y.length; i++) {
            str += `${JSON.stringify(y[i][0])}${JSON.stringify(
                y[i][1]["time"]
            )}`;
        }

        return str;
    };
    let z = processHours(y);

    if (!business) return null;
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
                            {business.hours ? (
                                <div id="hours">
                                    {Object.entries(business.hours).map(
                                        (k, i) => {
                                            <p>
                                                {" "}
                                                {`${JSON.stringify(
                                                    y[i][0]
                                                )}${JSON.stringify(
                                                    y[i][1]["time"]
                                                )}`}
                                            </p>;
                                        }
                                    )}
                                </div>
                            ) : (
                                <p></p>
                            )}
                        </div>
                    </div>
                </div>
                <div id="BSDRgutter"></div>
            </div>
        </>
    );
};

export default BusinessShowDisplay;
