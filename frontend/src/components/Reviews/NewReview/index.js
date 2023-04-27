import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import PhotoUpload from "../PhotoUpload";
import {
    getBusiness
} from "../../../store/businesses";
import {createReview} from '../../../store/reviews';
import { getUser} from "../../../store/session";
import Navigation from "../../Navigation";
import "./NewReview.css";

const NewReview = (props) => {
    const dispatch = useDispatch();
    const { busId } = useParams();
    let business = useSelector(getBusiness(busId));
    const sessionUser = useSelector(getUser);
    const [userId, setUserId] = useState(sessionUser.id || '');
    const [body, setBody] = useState("");
    // const [busId, setBusId] = useState(paramBusId || '')
    const [rating, setRating] = useState(3);
    let review = {author_id: userId, business_id:busId, body, rating}
   

    useEffect(()=>{
      setUserId(sessionUser.id);

    }, [sessionUser])


    if (!business) <Redirect to="/home" />;


    const submitHandler =(e)=> {
        e.preventDefault();
        let review = {author_id: sessionUser.id, business_id: busId, body, rating: 2}

        dispatch(createReview(review))   
    }
    return (
        <>
            <Navigation showFlag={false} />
            <div id="newReviewContainer">
                <div id="leftGutter"></div>
                <div id="center">
                    <form onSubmit={submitHandler}>
                        <h2 className="title">{business.name}</h2>
                        <textarea
                            className="textareaLarge"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        >
                            {body}
                        </textarea>
                        <input
                            className="button"
                            type="submit"
                            value="Post Review"
                        />
                    </form>
                    {console.log('hhhhhh', review)}
                    <PhotoUpload review={review}/>
                   
                </div>
                <div id="rightGutter"></div>
            </div>
        </>
    );
};

export default NewReview;
