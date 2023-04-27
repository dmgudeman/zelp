import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import ReviewNewForm from './ReviewNewForm';
import RatingInput from "../RatingInput";
import PhotoUpload from "../PhotoUpload";
import ReviewNewSubmit from './ReviewNewSubmit/ReviewNewSubmit';
import {
    getBusiness
} from "../../../store/businesses";
import {createReview} from '../../../store/reviews';
import { getUser} from "../../../store/session";
import Navigation from "../../Navigation";
import "./ReviewNew.css";

const ReviewNew = (props) => {
    const dispatch = useDispatch();
    const { busId } = useParams();
    let business = useSelector(getBusiness(busId));
    const sessionUser = useSelector(getUser);
    const [userId, setUserId] = useState(sessionUser.id || '');
    const [body, setBody] = useState("");
    // const [busId, setBusId] = useState(paramBusId || '')
    const [rating, setRating] = useState(0);
    let review = {author_id: userId, business_id:busId, body, rating}
   

    useEffect(()=>{
      setUserId(sessionUser.id);
      setRating(rating);

    }, [sessionUser, rating])


    if (!business) <Redirect to="/home" />;

    const ratingOnChange = (num) => {  
        setRating(parseInt(num))
        console.log('rating', rating)
    }

    const bodyOnChange = (e) => {
        console.log(e.target.value)
        setBody(e.target.value)
    }

    const submitHandler =(e)=> {
        e.preventDefault();
        let review = {author_id: sessionUser.id, business_id: busId, body, rating}
        console.log(review)
        dispatch(createReview(review))   
    }
    return (
        <>
            <Navigation showFlag={false} />
           
            <div id="newReviewContainer">
                <div id="leftGutter"></div>
                <div id="center">
            
                <h2 className="title">{business.name}</h2>
                <h1 className="italic">Leave a Rating, a Review and attach photos if you would like</h1>
                    <RatingInput ratingOnChange={ratingOnChange} pRating={rating}/>


                    {rating >0 ? <ReviewNewForm body={body} bodyOnChange={bodyOnChange}/> : <h2>First a rating</h2> }
                    
                    { rating > 0 && body ? <PhotoUpload review={review} rating={rating}/> : null}
                    <ReviewNewSubmit submitHandler={submitHandler}/>
                   
                </div>
                <div id="rightGutter"></div>
            </div>
        </>
    );
};

export default ReviewNew;
