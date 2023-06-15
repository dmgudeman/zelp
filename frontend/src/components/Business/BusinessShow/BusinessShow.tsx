import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch as _useDispatch } from "react-redux";
import BusinessShowDisplay from "../BusinessShowDisplay/BusinessShowDisplay";
import ReviewsIndex from "../../Reviews/ReviewsIndex/ReviewsIndex";
import NavBar from "../../Navigation/NavBar/NavBar";
import { getBusiness, fetchBusiness } from "../../../store/businessesSlice";
import type { RootState, AppDispatch } from "../../../store/store";
import type { Review } from "../../../Types/ReviewTypes";
import "./BusinessShow.css";

const useDispatch = () => _useDispatch<AppDispatch>();

const BusinessShow = () => {
    const dispatch = useDispatch();
    const { busId } = useParams();
    let business = useSelector((state: RootState) => getBusiness(busId)(state));
    const [localReviews, setLocalReviews] = useState<Review[]>([]);
    useEffect(() => {
        if (busId) {
            dispatch(fetchBusiness(busId));
        }
    }, [dispatch, busId]);

    useEffect(() => {
        if (business && business.reviews) {
            setLocalReviews(business.reviews);
        }
    }, [business]);

    if (!business) return null;

    return (
        <>
            <NavBar showFlag={true} />
            <div id="businessShowContainer">
                <div
                    style={{
                        backgroundImage: `url(${business.imageUrls?.[0]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        height: "100vh",
                        display: "flex",
                        alignItems: "end",
                        justifyContent: "start",

                        textShadow: "3px 3px #000",
                        zIndex: -1,
                    }}
                >
                    <div className="businessName">{business.name}</div>
                </div>

                <BusinessShowDisplay business={business} />
                <ReviewsIndex business={business} />
            </div>
        </>
    );
};

export default BusinessShow;
