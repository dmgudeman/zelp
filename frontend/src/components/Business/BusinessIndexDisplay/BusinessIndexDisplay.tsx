import React from 'react';
import { useSelector, useDispatch as _useDispatch } from "react-redux";
import { getBusinesses } from "../../../store/businessesSlice";
import { getReviewsByBusiness } from '../../../store/reviewsSlice';
import BusinessCard from "../BusinessCard/BusinessCard";
import type { IBuisnessDisplayProps } from '../../../Types/IComponents/IBusiness';
import type { RootState, AppDispatch } from '../../../store/store';
import type {Review } from '../../../Types/ReviewTypes';
import "./BusinessIndexDisplay.css";

const useDispatch = () => _useDispatch<AppDispatch>();

const BusinessIndexDisplay: React.FC<IBuisnessDisplayProps> = ({ businesses, cardTotal }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div id="displayContainer">
                {businesses.map((business, idx) => {
                    if (idx < cardTotal) {
                        return (
                         <BusinessCard 
                                business={business}
                                key={business.id} 
                                rating={business.rating ? business.rating : 0}
                            />
                        );
                    }
                })}
            </div>
        </>
    );
};

export default BusinessIndexDisplay;

