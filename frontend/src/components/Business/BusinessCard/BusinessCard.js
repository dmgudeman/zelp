import './BusinessCard.css'
import { Link } from "react-router-dom";
import RatingDisplay from "../../Reviews/RatingDisplay/RatingDisplay";

const BusinessCard = ({ business }) => {

    if(!business) return null;
    return (
        <>
            <div id="businessCardContainer">
                <div id="imageContainer">
                    <img id="busPic" src={business?.imageUrls[0]} alt="business photo" />
                </div>
                <div id="reviewContainer">
                    <div className="firstLine">
                        <Link to={`/businesses/${business.id}`}>
                            <p>{business.name}</p>
                        </Link>
                        {/* <p>
                            <i id="x" className="fa-solid fa-x"></i>
                        </p> */}
                    </div>
                    <RatingDisplay rating={business.rating} />
                </div>
            </div>
        </>
    );
};

export default BusinessCard;
