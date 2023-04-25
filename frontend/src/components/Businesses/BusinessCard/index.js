import "./BusinessCard.css";
import DisplayReview from "../../Reviews/DisplayReview";

const BusinessCard = ({ business }) => {
    return (
        <>
            <div id="businessCardContainer">
                <div id="imageContainer">
                    <p>IMAGE</p>
                </div>
                <div id="reviewContainer">
                    <div className="firstLine">
                        <p>{business.name}</p>
                        <p>
                            <i id="x" className="fa-solid fa-x"></i>
                        </p>
                    </div>
                    <DisplayReview rating={business.rating} />
                </div>
            </div>
        </>
    );
};

export default BusinessCard;
