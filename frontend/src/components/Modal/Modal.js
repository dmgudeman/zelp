import "./Modal.css";

const NewModal = ({ closeModal, openModal, form }) => {
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={(e) => e.stopPropagation()}>
                {form}
            </div>
        </div>
    );
};

export default NewModal;
