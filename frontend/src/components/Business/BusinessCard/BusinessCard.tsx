import React from "react";
import "./BusinessCard.css";
import { Link } from "react-router-dom";
import RatingDisplayBusSmall from "../../Reviews/RatingDisplay/RatingDisplayBusSmall/RatingDisplayBusSmall";
import { IBusinessCardProps } from "../../../Types/IComponents/IBusiness";

const BusinessCard: React.FC<IBusinessCardProps> = ({ business, rating }) => {
    if (!business) return null;
    return (
        <>
            <Link
                id="businessCardContainer"
                className="businessLink"
                to={`/businesses/${business.id}`}
            >
                <div id="imageContainer">
                    <img
                        id="busPic"
                        src={business?.imageUrls?.[0] || undefined}
                        alt="business photo"
                    />
                </div>
                <div id="reviewContainer">
                    <div className="firstLine">
                        <p>{business.name}</p>
                    </div>
                    {business.rating && (
                        <RatingDisplayBusSmall rating={rating} />
                    )}
                </div>
            </Link>
        </>
    );
};

export default BusinessCard;
