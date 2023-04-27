
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchReviews, getReviews } from '../../../store/reviews';
import './ReviewsIndex.css';

const ReviewsIndex = (props) => {
    let reviews;
    const dispatch = useDispatch();
    reviews = useSelector(getReviews)
    

    useEffect(() => {
      
      reviews = dispatch(fetchReviews());
    }, []);

    return (
      <>
      <h2>REVIEWS INDEX</h2>
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h2>REVIEW</h2>
                <img src={review.photoUrl} alt="" />
                <p>{review.body}</p>
              </li>
            );
          })}
        </ul>
        </>
      );
    
}


export default ReviewsIndex;