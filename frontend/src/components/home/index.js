import Navigation from "../Navigation";
import './home.css';

const home = (props) => {
    return (
        <div id="homeContainer">
            <Navigation id="app-nav" showFull={true}/>
            <div className="heroContainer">
            </div>
        </div>
    );
};

export default home;
