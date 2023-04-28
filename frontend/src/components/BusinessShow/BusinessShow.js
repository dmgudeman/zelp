import { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";
import BusinessCard from "../BusinessCard/BusinessCard";
import ReviewsIndex from "../Reviews/ReviewsIndex/ReviewsIndex";
import Navigation from "../Navigation";
import { getBusiness, fetchBusiness } from "../../store/businesses";
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
        dispatch(fetchBusiness(busId));
    
    }, [dispatch, business.review]);
    // if (!busId) return <Redirect to="/" />;
    // if (!business) return <Redirect to="/" />;

    return (
        <>
            <Navigation showFlag={"index"} />
            <div id="businessShowContainer">
                <div id="heroContainer">
                    <div className="businessName">{business.name}</div>
                </div>
                <div id="lowerContainer">
                    <div id="l-1"></div>
                    <div id="l-2">
                        <div className="buttons">
                            <Link to={`/reviewNew/${business.id}`}>
                                <button className="blue-button">
                                    <i className="fa-regular fa-star"></i> Leave your opinions, and  optional photo(s)
                                </button>
                            </Link>
                        </div>
                        <ReviewsIndex reviews={business.reviews}/>
                    </div>
                    <div id="l-3"></div>
                    <div id="l-4"></div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    reviews: state.reviews,
  });

export default connect(mapStateToProps)(BusinessShow);