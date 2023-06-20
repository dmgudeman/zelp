import React from 'react';
import { useState } from "react";
import { useDispatch as _useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import {
    fetchBusinessesSearch,
} from "../../../../store/businessesSlice";
import type { AppDispatch } from '../../../../store/store';
import car5 from "../../../../assets/images/car5.jpeg";
import "../Carousel.css";

const useDispatch = () => _useDispatch<AppDispatch>();

const Splash5 = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(fetchBusinessesSearch({
            "tag": "Plumbing Services",
            "bus": "",
            "add": ""
        })).then(() => {
            history.push("/businesses");
        });

    }
    return (
        <>
            <div id="businessShowContainer1">
                <img
                    src={car5}
                    alt=""
                    style={{ display: "none" }}
                    onLoad={() => setIsLoaded(true)}
                />
                {isLoaded && (
                    <div
                        style={{
                            backgroundImage: `url(${car5})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            height: "100vh",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textShadow: "4px 4px #000",
                            zIndex: -1,
                        }}
                    >
                        <div className="carTitle1">Find Services</div>
                        <div className="carTitle1">FAST</div>
                        <div className="carTitleSpace"></div>
                        <div className="carTitle4" onClick={(e)=> handleClick(e)}>Plumbing</div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Splash5;
