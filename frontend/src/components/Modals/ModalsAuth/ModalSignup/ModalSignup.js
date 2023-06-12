import { useSelector, useDispatch } from "react-redux";
import { showSignupModal, hideSignupModal} from "../../../../store/ui";
import SignupForm from "../../../Auth/SignupForm/SignupForm";
import "./ModalSignup.css";

function ModalSignup() {
    const dispatch = useDispatch();
    const showSignup = useSelector(state => state.ui.showSignup);
    let content;
    console.log('showSignup', showSignup)
    const handleCloseSignup = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(hideSignupModal());
      };

    
      const handleOpenSignupModal = () => {
        dispatch(showSignupModal());
      };
       if (showSignup) {
          content = (<div className="modal-background" onClick={(e)=>handleCloseSignup(e)}>
     
            <SignupForm/>
        </div>)
       } else {
        content = null
       }


      return (
        <>{content}</>
      );
    }
    


export default ModalSignup;
