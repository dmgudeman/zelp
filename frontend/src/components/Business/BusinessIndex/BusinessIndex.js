import { useState } from "react";
import { useSelector } from "react-redux";
import { getBusinesses } from "../../../store/businessesSlice";
import BusinessIndexDisplay from "../BusinessIndexDisplay/BusinessIndexDisplay";
import NavBar from "../../Navigation/NavBar/NavBar";
import SearchBar from "../../Navigation/SearchBar/SearchBar";
import "./BusinessIndex.css";

const BusinessIndex = (props) => {
    let businesses = useSelector(getBusinesses);

    const [cardTotal, setCardTotal] = useState(6);

    return (
        <>
            <div id="businessContainer">
                <NavBar showFlag={true} />
                <div id="bannerContainer">
                    <BannerBackground businesses={businesses} />
                    <div classNmae="containerCAR1">
                        <div className="carTitle1 greenText">
                            Review A Business
                        </div>
                        <div className="carTitle1 greenText">
                            Of Your Choice
                        </div>
                    </div>
                </div>

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

const BannerBackground = ({ businesses }) => {
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

