export const OPEN_MODAL = "ui/OPEN_MODAL";
export const CLOSE_MODAL = "ui/CLOSE_MODAL";



export const openModal = modal => {
    return {
      type: OPEN_MODAL,
      modal
    };
  };
  
  export const closeModal = () => {
    return {
      type: CLOSE_MODAL
    };
  };
  

const modalReducer = (state = null, action) => {
    switch (action.type) {
      case OPEN_MODAL:
        return action.modal;
      case CLOSE_MODAL:
        return null;
      default:
        return state;
    }
  }

export default modalReducer;