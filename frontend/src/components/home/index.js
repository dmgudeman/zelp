import Navigation from "../Navigation";
import './Home.css';

const Home = (props) => {
    return (
        <div id="homeContainer">
            <Navigation id="app-nav" showFull={true}/>
            <div className="heroContainer">
            </div>
        </div>
    );
};

export default Home;
