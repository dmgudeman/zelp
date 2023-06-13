import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BusinessShowDisplay from "../BusinessShowDisplay/BusinessShowDisplay";
import ReviewsIndex from "../../Reviews/ReviewsIndex/ReviewsIndex";
import NavBar from "../../Navigation/NavBar/NavBar";
import ReviewModal from "../../Modals/ReviewModal/ReviewModal";
import { getBusiness, fetchBusiness } from "../../../store/businessesSlice";
import { fetchReviewsByBusiness, getReviews } from "../../../store/reviewsSlice";
import { getTags } from "../../../store/tagsSlice";
import "./BusinessShow.css";

const BusinessShow = (props) => {
    const dispatch = useDispatch();
    const { busId } = useParams();
    let business = useSelector(getBusiness(busId));
    const [localReviews, setLocalReviews] = useState([]);
    let tags = useSelector(getTags);
    useEffect(() => {
        if (busId) {
            dispatch(fetchBusiness(busId));
            // dispatch(fetchReviewsByBusiness(busId));
            
        }
    }, [dispatch, busId]);

    useEffect(() => {
        if (business?.reviews) {
            setLocalReviews(business.reviews);
        }
    }, [business]);


    if (!business) return null;

    return (
        <>
            
            <NavBar className="navIndexBackground" showFlag={true} />
            <div id="businessShowContainer">
                {/* 
                    <div className="businessName">{business.name}</div>
                </div> */}

                <div
                    style={{
                        backgroundImage: `url(${business.imageUrls[0]})`,
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

// const BannerBackground = ({ businesses }) => {
//     const imgUrl = businesses[0]?.imageUrls
//         ? businesses[0].imageUrls[0]
//         : "https://zelp99-seeds.s3.us-west-1.amazonaws.com/Sprouts_a1.jpeg";
//     return (
//         <>
//             <div
//                 className="backgroundContainer"
//                 style={{
//                     backgroundImage: `url(${imgUrl})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "top",
//                     opacity: 0.5,
//                 }}
//             ></div>
//         </>
//     );
// };

// const Banner = (props) => {
//     return (
//         <>
//             <div className="businessContainer">
//                 <div className="bannerContainer">
//                     <div className={"leftBanner"}></div>
//                     <div className="centerBanner">
//                         <h2>Find a business to review</h2>
//                         <p className="secondLine">
//                             Review anything from your favorite patios spot to
//                             your local flower shop.
//                         </p>

//                         <div className="bottomBanner">
//                             <div>Visited one of these places recently?</div>
//                         </div>
//                     </div>
//                     <div className="rightBanner"></div>
//                 </div>
//             </div>
//         </>
//     );
// };
