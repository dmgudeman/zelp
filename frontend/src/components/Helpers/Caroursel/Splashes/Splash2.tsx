import React from 'react';
import { useState } from "react";
import { useDispatch as _useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import {
    fetchBusinessesSearch,
} from "../../../../store/businessesSlice";
import type { AppDispatch } from '../../../../store/store';
import car2 from "../../../../assets/images/car2.jpeg";
import "../Carousel.css";

const useDispatch = () => _useDispatch<AppDispatch>();

const Splash2 = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(fetchBusinessesSearch({
            "tag": "Lumber",
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
                    src={car2}
                    alt=""
                    style={{ display: "none" }}
                    onLoad={() => setIsLoaded(true)}
                />
                {isLoaded && (
                    <div
                        style={{
                            backgroundImage: `url(${car2})`,
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
                        <div className="carTitle4" onClick={(e)=> handleClick(e)}>Lumber</div>
                        <div className="carTitleSpace"></div>
                        <div className="carTitle1">Be a</div>
                        <div className="carTitle1">Do it your selfer!</div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Splash2;
