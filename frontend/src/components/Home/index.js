import NavBar from "../Navigation/NavBar/NavBar";
import Carousel from "../Helpers/Caroursel/Carousel1";
import './Home.css';

const Home = (props) => {
    return (
        <div id="homeContainer1">
            <NavBar id="app-nav" showFlag={true}/>
            <div className="heroContainer1">
                <Carousel/>
            </div>
        </div>
    );
};

export default Home;
