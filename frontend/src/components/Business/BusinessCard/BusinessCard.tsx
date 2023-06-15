import React from "react";
import "./BusinessCard.css";
import { Link } from "react-router-dom";
import RatingDisplayBusSmall from "../../Reviews/RatingDisplay/RatingDisplayBusSmall/RatingDisplayBusSmall";
import { IBusinessCardProps } from "../../../Types/IComponents/IBusiness";

const BusinessCard: React.FC<IBusinessCardProps> = ({ business, rating }) => {
    if (!business) return null;
    console.log("RATING", rating)
    return (
        <>
            <div id="businessCardContainer">
                <div id="imageContainer">
                    <img
                        id="busPic"
                        src={business?.imageUrls?.[0] || undefined}
                        alt="business photo"
                    />
                </div>
                <div id="reviewContainer">
                    <div className="firstLine">
                        <Link to={`/businesses/${business.id}`}>
                            <p>{business.name}</p>
                        </Link>
                    </div>
                    {business.rating && <RatingDisplayBusSmall
                        rating={rating}
                        // starClass="starDisplaySmall"
                    />}
                </div>
            </div>
        </>
    );
};

export default BusinessCard;
