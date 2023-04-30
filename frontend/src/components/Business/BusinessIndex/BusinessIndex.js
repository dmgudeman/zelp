import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinesses, getBusinesses } from "../../../store/businesses";
import BusinessIndexDisplay from "../BusinessIndexDisplay/BusinessIndexDisplay";
import NavBar from "../../Navigation/NavBar/NavBar";
import SearchBar from "../../Navigation/SearchBar/SearchBar";
import "./BusinessIndex.css";

const BusinessIndex = (props) => {
    const dispatch = useDispatch();
    let businesses = useSelector(getBusinesses);
    const [cardTotal, setCardTotal] = useState(6);

    useEffect(() => {
      
        dispatch(fetchBusinesses());
    }, [dispatch]);

    if (!businesses) return null;
    return (
        <>
            {/* <NavBar showFlag={false} /> */}
            <div className="businessContainer">
                <BannerBackground businesses={businesses}/>
                <Banner />

                <div className="cardContainer">
                    <BusinessIndexDisplay
                        businesses={businesses}
                        cardTotal={cardTotal}
                    />
                </div>
            </div>
        </>
    );
};

export default BusinessIndex;

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
                        <div id="bannerSearchBar">
                            <SearchBar />
                        </div>
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
