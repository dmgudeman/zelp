import React from 'react';
import {useState, useEffect} from 'react';
import ZelpMap from "../../Maps/ZelpMap/ZelpMap";
import RatingDisplay from "../../Reviews/RatingDisplay/RatingDisplay";
import DisplayHours from "../../Helpers/DisplayHours/DisplayHours";
import type { IBusinessShowDisplayProps } from '../../../Types/IComponents/IBusiness';
import "./BusinessShowDisplay.css";


const BusinessShowDisplay : React.FC<IBusinessShowDisplayProps>  = ({ business }) => {
    let hoursArray = Object.entries(business.hours);
  console.log('business.rating', business)
    const [coords, setCoords] = useState(JSON.parse(business.latlng as string))
    useEffect(()=>{
        setCoords(JSON.parse(business.latlng as string))
    },[business])
   
    if (!business) return null;
    return (
        <>
            <div className="rowContainer">
                <div id="BSDLgutter"></div>
                <div id="BSDCenter">
                    <div id="InfoContainer">
                        <RatingDisplay rating={business.rating} starClass="starDisplay" />
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
