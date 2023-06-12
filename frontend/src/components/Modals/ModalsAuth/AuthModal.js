import { useSelector, useDispatch } from "react-redux";
import { showSignupModal, hideSignupModal, showLoginModal, hideLoginModal } from "../../../store/ui";
import SignupForm from "../../Auth/SignupForm/SignupForm";
import LoginForm from "../../Auth/LoginForm/LoginForm";
import "./AuthModal.css";

function AuthModal() {
    const dispatch = useDispatch();
    const authModalFlag = useSelector((state) => state.ui.authModalFlag);

    const handleCloseSignup = () => {
        dispatch(hideSignupModal());
      };
    
      const handleCloseLogin = () => {
        dispatch(hideLoginModal());
      };
    
      const handleOpenSignupModal = () => {
        dispatch(showSignupModal());
      };
    
      const handleOpenLoginModal = () => {
        dispatch(showLoginModal());
      };
    
      let formComponent;
    
      if (authModalFlag === "signup") {
        formComponent = <SignupForm />;
      } else if (authModalFlag === "login") {
        formComponent = <LoginForm />;
      } else {
        return null;
      }

      return (
        <div className="modal-background" onClick={authModalFlag === "signup" ? handleCloseSignup : handleCloseLogin}>
          <div className="modal-child" onClick={(e) => e.stopPropagation()}>
            {formComponent}
            {authModalFlag === "signup" && (
              <button onClick={handleOpenLoginModal}>Open Login Modal</button>
            )}
            {authModalFlag === "login" && (
              <button onClick={handleOpenSignupModal}>Open Signup Modal</button>
            )}
          </div>
        </div>
      );
    }
    


export default AuthModal;
