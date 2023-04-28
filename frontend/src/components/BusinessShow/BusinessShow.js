import { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BusinessCard from "../BusinessCard/BusinessCard";
import ReviewsIndex from "../Reviews/ReviewsIndex/ReviewsIndex";
import Navigation from "../Navigation";
import { getBusiness, fetchbusiness } from "../../store/businesses";
import "./BusinessShow.css";

const BusinessShow = (props) => {
    const dispatch = useDispatch();
    const { busId } = useParams();

    let business = useSelector(getBusiness(busId));
    const [id, setId] = useState(busId);

    useEffect(() => {
        if (!busId) {
            <Redirect to="/" />;
            //    
        }   

    }, [dispatch, busId]);
    if (!busId) return <Redirect to="/" />;
    if (!business) return <Redirect to="/" />;

    return (
        <>
            <Navigation showFlag={"index"} />
            <div id="businessShowContainer">
                <div id="heroContainer">
                    <div id="businessGroup">
                        <BusinessCard business={business} />
                    </div>
                </div>
                <div id="lowerContainer">
                    <div id="l-1"></div>
                    <div id="l-2">
                        <div className="buttons">
                            <Link to={`/reviewNew/${business.id}`}>
                                <button className="blue-button">
                                    <i className="fa-regular fa-star"></i>Write
                                    a review
                                </button>
                            </Link>
                            <button>Add Photo</button>
                        </div>
                        <ReviewsIndex />
                    </div>
                    <div id="l-3"></div>
                    <div id="l-4"></div>
                </div>
            </div>
        </>
    );
};

export default BusinessShow;
