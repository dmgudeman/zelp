import NavBar from "../Navigation/NavBar/NavBar";
import Carousel from "../Helpers/Caroursel/Carousel";
import './Home.css';

const Home = (props) => {
    return (
        <div id="homeContainer">
            <NavBar id="app-nav" showFlag={true}/>
            <div className="heroContainer">
                <Carousel/>
            </div>
        </div>
    );
};

export default Home;
