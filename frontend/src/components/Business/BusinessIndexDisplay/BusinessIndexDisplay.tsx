import React from "react";
import { useDispatch as _useDispatch } from "react-redux";
import BusinessCard from "../BusinessCard/BusinessCard";
import type { IBuisnessDisplayProps } from "../../../Types/IComponents/IBusiness";
import "./BusinessIndexDisplay.css";

const BusinessIndexDisplay: React.FC<IBuisnessDisplayProps> = ({
    businesses,
}) => {

    businesses.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <>
            <div id="displayContainer">
                {businesses.map((business) => {
                    return (
                        <BusinessCard
                            business={business}
                            key={business.id}
                            rating={business.rating ? business.rating : 0}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default BusinessIndexDisplay;
