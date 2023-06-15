import React from "react";
import "./BusinessCard.css";
import { Link } from "react-router-dom";
import RatingDisplay from "../../Reviews/RatingDisplay/RatingDisplay";
import { IBusinessCardProps } from "../../../Types/IComponents/IBusiness";

const BusinessCard: React.FC<IBusinessCardProps> = ({ business }) => {
    if (!business) return null;
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
                    <RatingDisplay
                        rating={business.rating || null}
                        starClass="starDisplaySmall"
                    />
                </div>
            </div>
        </>
    );
};

export default BusinessCard;
