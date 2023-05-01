import { useEffect, useState} from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";
import BusinessShowDisplay from "../BusinessShowDisplay/BusinessShowDisplay";
import ReviewsIndex from "../../Reviews/ReviewsIndex/ReviewsIndex";
import Navigation from "../../Navigation/NavBar/NavBar";
import ZelpMap from "../../Maps/ZelpMap/ZelpMap";
import { getBusiness, fetchBusiness, getBusinesses,fetchBusinesses } from "../../../store/businesses";
import { getReviews } from "../../../store/reviews";
import "./BusinessShow.css";

const BusinessShow = (props) => {
    const dispatch = useDispatch();
    const { busId } = useParams();
    let business = useSelector(getBusiness(busId));
    let reviews = useSelector(getReviews);
    const [name, setName] = useState(business?.name || '')
   

    useEffect(() => {
        if(busId){
            dispatch(fetchBusiness(busId));
        }
    }, [dispatch, busId]);

 


    if (!business) return null;

    return (
        <>
            <Navigation showFlag={"index"} />
            <div id="businessShowContainer">
                <div id="heroContainer">
                    <div className="businessName">{name}</div>
                </div>
                <BusinessShowDisplay businesses={[business]}/>
                <div id="lowerContainer">
                    <div id="l-1"></div>
                    <div id="l-2">
                        <div className="buttons">
                            <Link to={`/reviewNew/${business.id}`}>
                                <button className="blue-button">
                                    {/* <i className="fa-regular fa-star"></i>  */}
                                    Leave your opinions, and optional photo(s)
                                </button>
                            </Link>
                        </div>
                        <ReviewsIndex reviews={reviews} />
                      
                    </div>
                    <div id="l-3"></div>
                    <div id="l-4"></div>
                </div>
            </div>
        </>
    );
};

export default BusinessShow;


const BannerBackground = ({businesses}) => {
    const imgUrl = businesses[0]?.imageUrls ?  businesses[0].imageUrls[0] : 'https://zelp99-seeds.s3.us-west-1.amazonaws.com/Sprouts_a1.jpeg'
    return (
        <>
        
            <div className="backgroundContainer"
             style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "top", opacity: 0.5}}>
            </div>
        </>
    );
};

const Banner = (props) => {
    return (
        <>
            <div className="businessContainer">
                <div className="bannerContainer">
                    <div className={"leftBanner"}></div>
                    <div className="centerBanner">
                        <h2>Find a business to review</h2>
                        <p className="secondLine">
                            Review anything from your favorite patios spot to
                            your local flower shop.
                        </p>
                      
                        <div className="bottomBanner">
                            <div>Visited one of these places recently?</div>
                        </div>
                    </div>
                    <div className="rightBanner"></div>
                </div>
            </div>
        </>
    );
};


