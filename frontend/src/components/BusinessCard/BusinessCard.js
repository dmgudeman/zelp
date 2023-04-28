import './BusinessCard.css'
import { Link } from "react-router-dom";
import RatingDisplay from "../Reviews/RatingDisplay/RatingDisplay";

const BusinessCard = ({ business }) => {

 
    return (
        <>
            <div id="businessCardContainer">
                <div id="imageContainer">
                    <p>IMAGE</p>
                </div>
                <div id="reviewContainer">
                    <div className="firstLine">
                        <Link to={`/businesses/${business.id}`}>
                            <p>{business.name}</p>
                        </Link>
                        <p>
                            <i id="x" className="fa-solid fa-x"></i>
                        </p>
                    </div>
                    <RatingDisplay rating={business.rating} />
                </div>
            </div>
        </>
    );
};

export default BusinessCard;
