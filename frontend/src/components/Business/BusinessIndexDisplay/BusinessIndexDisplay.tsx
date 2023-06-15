import React from 'react';
import BusinessCard from "../BusinessCard/BusinessCard";
import type { IBuisnessDisplayProps } from '../../../Types/IComponents/IBusiness';
import "./BusinessIndexDisplay.css";

const BusinessIndexDisplay: React.FC<IBuisnessDisplayProps> = ({ businesses, cardTotal }) => {
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
