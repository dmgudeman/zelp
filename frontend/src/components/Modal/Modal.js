import "./Modal.css";

const Modal = ({ closeModal, openModal, form }) => {
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={(e) => e.stopPropagation()}>
                {form}
            </div>
        </div>
    );
};

export default Modal;
