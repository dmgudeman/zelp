import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinesses, getBusinesses } from "../../store/businesses";
import BusinessCard from "./BusinessCard";
import Navigation from "../Navigation";
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
                        <h2>Find a business to review</h2>
                        <p>
                            Review anything from your favorite patios spot to
                            your local flower shop
                        </p>
                        <div>Visited one of these places recently?</div>
                    </div>
                    <div className="cardContainer">
                        {businesses.map((business, idx) => {
                            if(idx < cardTotal ){
                           return  <BusinessCard business={business} />
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Businesses;
