
import LoginForm from '../Auth/LoginForm/LoginForm';
import SignupForm from '../Auth/SignupForm/SignupForm';
import { showModal, hideModal } from '../../store/ui';
// import ReviewForm from './ReviewForm';

const Modal = ({ showModalType, closeModal }) => {
  let form = null;
  switch (showModalType) {
    case 'LOGIN':
      form = <LoginForm />;
      break;
    case 'SIGNUP':
      form = <SignupForm />;
      break;
    // case 'REVIEW':
    //   form = <ReviewForm />;
    //   break;
    default:
      form = null;
  }
  return (
    <div className="modal-background">
      <div className="modal-child">
        {form}
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  );
};

export default Modal;