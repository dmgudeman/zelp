import BusinessCard from "../BusinessCard/BusinessCard";
import "./BusinessIndexDisplay.css";

const BusinessIndexDisplay = ({ businesses, cardTotal }) => {
    return (
        <>
        <div id="displayContainer">
            {businesses.map((business, idx) => {
                if (idx < cardTotal) {
                    return (
                        <BusinessCard business={business} key={business.id} />
                    );
                }
            })}
            </div>
        </>
    );
};

export default BusinessIndexDisplay;
