import React from "react";
import NavBar from "../Navigation/NavBar/NavBar";
import Carousel from "../Helpers/Caroursel/Carousel";
import "./Home.css";

const Home = () => {
    return (
        <>
            <div id="homeContainer">
                <NavBar showFlag={true} />
                <Carousel />
            </div>
        </>
    );
};

export default Home;
