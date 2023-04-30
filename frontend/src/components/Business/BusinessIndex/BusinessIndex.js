import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinesses, getBusinesses } from "../../../store/businesses";
import BusinessCard from "../BusinessCard/BusinessCard";
import NavBar from "../../Navigation/NavBar/NavBar";
import SearchBar from "../../Navigation/SearchBar";
import "./BusinessIndex.css";

const BusinessIndex = (props) => {
    const dispatch = useDispatch();
    let businesses = useSelector(getBusinesses);
    const [cardTotal, setCardTotal] = useState(6);

    // image for the banner background
    const imageClass = {
        backgroundImage: `url(${businesses[0]?.imageUrls[0]})`,
        backgroundWidth: "cover",
        backgroundPosition: "top",
        zIndex: '10'
    }

    useEffect(() => {
        dispatch(fetchBusinesses());
    }, [dispatch]);

    if (!businesses) return null;
    return (
        <>
            <div id="businessContainer">
            <NavBar showFlag={false} />
            <div className="backgroundBanner" style={imageClass}>
                <div id="bannerContainer">
                        <div id="centerBanner">
                            <div id="firstLine">Find a business to review</div>
                            <p id="secondLine">
                                Review anything from your favorite patios spot
                                to your local flower shop.
                            </p>
                            <div id="businessesSearchBar">
                            <SearchBar/>
                            </div>

                            <div id="centerBottomBanner">
                            </div>
                        </div>
                    </div>
                </div>
                <div id="cardContainer">
                    {businesses.map((business, idx) => {
                        if (idx < cardTotal) {
                            return (
                                <BusinessCard
                                    business={business}
                                    key={business.id}
                                />
                            );
                        }
                    })}
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default BusinessIndex;
