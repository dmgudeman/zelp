import NavBar from "../Navigation/NavBar/NavBar";
import Carousel from "../Helpers/Caroursel/Carousel1";
import "./Home.css";

const Home = (props) => {
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
