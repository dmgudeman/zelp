import ZelpMap from "../../Maps/ZelpMap/ZelpMap";
import RatingDisplay from "../../Reviews/RatingDisplay/RatingDisplay";
import "./BusinessShowDisplay.css";
const BusinessShowDisplay = ({business}) => {
    
   
    return (
        <>
            <div className="rowContainer">
                <div id="BSDLgutter">
                    <p>hi there</p>
                </div>
                <div id="BSDCenter">
                    <div id="InfoContainer">
                        <RatingDisplay starClass="starDisplay"/>
                        <div className="displayText" >{business.cost}</div>
                    </div>
                    <div id="mapContainer">
                        <div id="mapLeft">
                         <ZelpMap businesses={[business]} className="zelpMap"/>
                        </div>
                        <div id="mapRight"></div>
                    </div>
                </div>
                <div id="BSDRgutter">
                    <p>hi there</p>
                </div>
            </div>
        </>
    );
};

export default BusinessShowDisplay;
