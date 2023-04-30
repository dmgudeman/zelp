import Navigation from "../Navigation/NavBar/NavBar";
import './Home.css';

const Home = (props) => {
    return (
        <div id="homeContainer">
            <Navigation id="app-nav" showFlag={true}/>
            <div className="heroContainer">
            </div>
        </div>
    );
};

export default Home;
