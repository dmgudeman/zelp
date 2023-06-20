import React from "react";
import { useSelector } from "react-redux";
import { getBusinesses } from "../../../store/businessesSlice";
import BusinessIndexDisplay from "../BusinessIndexDisplay/BusinessIndexDisplay";
import NavBar from "../../Navigation/NavBar/NavBar";
import type { IBackgroundBannerProps } from "../../../Types/IComponents/IBusiness";
import "./BusinessIndex.css";

const BusinessIndex = () => {
    let businesses = useSelector(getBusinesses);

    return (
        <>
            <div id="businessContainer">
                <NavBar showFlag={true} />
                <div id="bannerContainer">
                    <BannerBackground businesses={businesses} />
                    <div className="bannerTextBI">
                        <div className=" greenText">Review A Business</div>
                        <div className="greenText">Of Your Choice</div>
                    </div>
                </div>
                <div className="cardContainer">
                    <BusinessIndexDisplay businesses={businesses} />
                </div>
            </div>
        </>
    );
};

export default BusinessIndex;

const BannerBackground: React.FC<IBackgroundBannerProps> = ({ businesses }) => {
    const imgUrl = businesses[0]?.imageUrls
        ? businesses[0].imageUrls[0]
        : "https://zelp99-seeds.s3.us-west-1.amazonaws.com/Sprouts_a1.jpeg";
    return (
        <>
            <div
                id="backgroundContainer"
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    opacity: 0.3,
                    zIndex: -1,
                }}
            ></div>
        </>
    );
};
