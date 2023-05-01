import ZelpMap from "../../Maps/ZelpMap/ZelpMap";
import "./BusinessShowDisplay.css";
const BusinessShowDisplay = ({businesses}) => {
   
    return (
        <>
            <div className="rowContainer">
                <div id="BSDLgutter">
                    <p>hi there</p>
                </div>
                <div id="BSDCenter">
                    <div id="InfoContainer">
                        <p>hi there</p>
                    </div>
                    <div id="mapContainer">
                        <div id="mapLeft">
                         <ZelpMap businesses={businesses} className="zelpMap"/>
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
