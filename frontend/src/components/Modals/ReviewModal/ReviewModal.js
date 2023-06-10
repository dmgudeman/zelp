

import { useSelector, useDispatch } from 'react-redux';
import { hideModal} from '../../../store/ui';
import ReviewEdit from '../../Reviews/ReviewEdit/ReviewEdit';
import { useEffect } from 'react';
import './ReviewModal.css';

function ReviewModal() {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.ui.showModal);
  const reviewId = useSelector(state => state.ui.reviewId);

  const handleClose = () => {
    dispatch(hideModal());
  }


  return (
    <div id="modalBackgroundRF"className={`modalBackgroundRF ${showModal ? '' : 'hide'}`} onClick={()=>handleClose()}>
   
      <ReviewEdit reviewId={reviewId}/>
    </div>
  );
}

export default ReviewModal