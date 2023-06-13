import { useSelector, useDispatch } from "react-redux";
import { showLoginModal, hideLoginModal } from "../../../../store/uiSlice";
import LoginForm from "../../../Auth/LoginForm/LoginForm";
import "./ModalLogin.css";

function ModalLogin() {
    const dispatch = useDispatch();

    const showLogin = useSelector((state) => state.ui.showLogin);
    let content;
    console.log("showLogin", showLogin);

    const handleCloseLogin = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(hideLoginModal());
    };

    if (showLogin) {
        content = (
            <div
                className="modal-background"
                onClick={(e) => handleCloseLogin(e)}
            >
                <LoginForm />
            </div>
        );
    } else {
        content = null;
    }

    return <>{content}</>;
}

export default ModalLogin;
