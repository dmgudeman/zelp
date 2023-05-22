import {useState, useEffect, CSSProperties} from 'react';
import LoadingSpinner from '../Helpers/LoadingSpinner/LoadingSpinner';
import NavBar from "../Navigation/NavBar/NavBar";

import Carousel from "../Helpers/Caroursel/Carousel1";
import "./Home.css";


  

const Home = (props) => {
    useEffect(() => {
        // Simulate a 3-second loading delay
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000);
    
        return () => clearTimeout(timer);
      }, []);


    let [loading, setLoading] = useState(true);
    if(loading) return <LoadingSpinner/>;
    return (
        <>
            <div id="homeContainer">
                <NavBar showFlag={true} />

                <Carousel loading={loading}/>
            </div>
        </>
    );
};

export default Home;
