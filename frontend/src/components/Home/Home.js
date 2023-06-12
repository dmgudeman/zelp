
import { useSelector } from "react-redux";
import NavBar from "../Navigation/NavBar/NavBar";
import Carousel from "../Helpers/Caroursel/Carousel";
import ModalSignup from "../Modals/ModalsAuth/ModalSignup/ModalSignup";
import ModalLogin from "../Modals/ModalsAuth/ModalLogin/ModalLogin";
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
