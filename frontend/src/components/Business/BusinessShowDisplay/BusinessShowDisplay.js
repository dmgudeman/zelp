import {useState, useEffect} from 'react';
import ZelpMap from "../../Maps/ZelpMap/ZelpMap";
import RatingDisplay from "../../Reviews/RatingDisplay/RatingDisplay";
import DisplayHours from "../../Helpers/DisplayHours/DisplayHours";
import "./BusinessShowDisplay.css";


const BusinessShowDisplay = ({ business }) => {
    let hoursArray = Object.entries(business.hours);
  
    const [coords, setCoords] = useState(JSON.parse(business.latlng))
    useEffect(()=>{
        setCoords(JSON.parse(business.latlng))
    },[business])
   
    console.log('JSON>PARSE business.latlng in BusinessShow', JSON.parse(business.latlng))
    console.log('coords in BSD', coords)
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
                                chars={business.name.slice(0,2)}
                                coords={coords}
                                className="zelpMap"
                            />
                        </div>
                        <div id="mapRight">
                            <DisplayHours hoursArray={hoursArray} />
                        </div>
                    </div>
                </div>
                <div id="BSDRgutter"></div>
            </div>
        </>
    );
};

export default BusinessShowDisplay;
