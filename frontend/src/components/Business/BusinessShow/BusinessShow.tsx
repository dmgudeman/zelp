import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch as _useDispatch  } from "react-redux";
import BusinessShowDisplay from "../BusinessShowDisplay/BusinessShowDisplay";
import ReviewsIndex from "../../Reviews/ReviewsIndex/ReviewsIndex";
import NavBar from "../../Navigation/NavBar/NavBar";
import { getBusiness, fetchBusiness } from "../../../store/businessesSlice";
import { fetchReviewsByBusiness, getReviews } from "../../../store/reviewsSlice";
import { getTags } from "../../../store/tagsSlice";
import type {AppDispatch} from "../../../store/store";
import type {Review} from "../../../Types/ReviewTypes"
import "./BusinessShow.css";
const useDispatch = () => _useDispatch<AppDispatch>();

const BusinessShow = () => {
    const dispatch = useDispatch();
    const { busId } = useParams();
    let business = useSelector(getBusiness(busId));
    const [localReviews, setLocalReviews] = useState<Review[]>([]);
    let tags = useSelector(getTags);
    useEffect(() => {
        if (busId) {
            dispatch(fetchBusiness(busId));
            // dispatch(fetchReviewsByBusiness(busId));
            
        }
    }, [dispatch, busId]);

    useEffect(() => {
        if ( business && business.reviews) {
            setLocalReviews(business.reviews);
        }
    }, [business]);


    if (!business) return null;

    return (
        <>
            
            <NavBar showFlag={true} />
            <div id="businessShowContainer">
                {/* 
                    <div className="businessName">{business.name}</div>
                </div> */}

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
                {/* <div id="lowerContainer"> */}
                <ReviewsIndex business={business} />
            </div>
            {/* </div> */}
        </>
    );
};

export default BusinessShow;

