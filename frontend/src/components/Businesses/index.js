import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinesses, getBusinesses } from "../../store/businesses";
import BusinessCard from "./BusinessCard";
import Navigation from "../Navigation";
import "./Businesses.css";

const Businesses = (props) => {
    const dispatch = useDispatch();
    let businesses = useSelector(getBusinesses);

    useEffect(() => {
        dispatch(fetchBusinesses());
    }, [dispatch]);
    return (
        <>
            <Navigation />
            <div className="businessContainer">
                <div className="bannerContainer">
                    <h2>Business Index</h2>
                </div>
                <div className="cardContainer">
                    {businesses.map((business) => (
                        <BusinessCard business={business} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Businesses;
