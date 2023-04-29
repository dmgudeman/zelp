import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinesses, getBusinesses } from "../../store/businesses";
import BusinessCard from "../BusinessCard/BusinessCard";
import Navigation from "../Navigation";
import SearchBar from '../SearchBar';
import "./Businesses.css";

const Businesses = (props) => {
    const dispatch = useDispatch();
    let businesses = useSelector(getBusinesses);
    const [cardTotal, setCardTotal] = useState(6);

    useEffect(() => {
        dispatch(fetchBusinesses());
    }, [dispatch]);
    return (
        <>
            <Navigation />
            <div className="background">
                <div className="businessContainer">
                    <div className="bannerContainer">
                        <div className="topBanner">
                            <div className="leftBanner">
                                <h2>Find a business to review</h2>
                                <p className="secondLine">
                                    Review anything from your favorite patios
                                    spot to your local flower shop.
                                </p>
                                <SearchBar/>
                            </div>
                            <div className="rightBanner">
                                <p>IMAGE</p>
                            </div>
                        </div>

                        <div className="bottomBanner">
                            <div>Visited one of these places recently?</div>
                        </div>
                    </div>
                    <div className="cardContainer">
                        {businesses.map((business, idx) => {
                            if (idx < cardTotal) {
                                return <BusinessCard business={business} key={business.id}/>;
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Businesses;