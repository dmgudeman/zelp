import React from 'react';
import { useState } from "react";
import { useDispatch as _useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import {
    fetchBusinessesSearch,
} from "../../../../store/businessesSlice";
import type { AppDispatch } from '../../../../store/store';
import car4 from "../../../../assets/images/car4.jpeg";
import "../Carousel.css";

const useDispatch = () => _useDispatch<AppDispatch>();

const Splash4 = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(fetchBusinessesSearch({
            "tag": "Restaurant",
            "bus": "",
            "add": ""
        })).then(() => {
            history.push("/businesses");
        });

    }
    return (
        <>
            <div id="businessShowContainer1" >
                <img
                    src={car4}
                    alt=""
                    style={{ display: "none" }}
                    onLoad={() => setIsLoaded(true)}
                />
                {isLoaded && (
                    <div
                        style={{
                            backgroundImage: `url(${car4})`,
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
                        <div className="carTitle44" onClick={(e)=> handleClick(e)}>Fine Cuisine</div>
                        <div className="carTitleSpace"></div>
                        <div className="carTitle1">Eat Well</div>
                        <div className="carTitleSpace"></div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Splash4;
