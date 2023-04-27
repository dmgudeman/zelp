import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import ReviewNewForm from "./ReviewNewForm";
import RatingInput from "../RatingInput";
import PhotoUpload from "../PhotoUpload";
import ReviewNewSubmit from "./ReviewNewSubmit/ReviewNewSubmit";
import { getBusiness } from "../../../store/businesses";
import { createReview } from "../../../store/reviews";
import { getUser } from "../../../store/session";
import Navigation from "../../Navigation";
import "./ReviewNew.css";

const ReviewNew = (props) => {
    const dispatch = useDispatch();
    const { busId } = useParams();
    let business = useSelector(getBusiness(busId));
    const sessionUser = useSelector(getUser);
    const [formData, setFormData] = useState(new FormData());

    const [userId, setUserId] = useState(sessionUser.id || "");
    const [body, setBody] = useState("");
    const [rating, setRating] = useState(0);
    // let review = { author_id: userId, business_id: busId, body, rating };

    useEffect(() => {
        setUserId(sessionUser.id);
        setRating(rating);
    }, [sessionUser, rating]);

    if (!business) <Redirect to="/home" />;

    // const ratingOnChange = (num) => {
    //     setRating(parseInt(num));
    //     console.log("rating", rating);
    // };

    // const bodyOnChange = (e) => {
    //     console.log(e.target.value);
    //     setBody(e.target.value);
    // };

    const handleChange = e => {
        console.log('handleCahnge fired')
        // setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

        console.log(e.target.value)
        const { name, value } = e.target;
      
        formData.set(name, value);
        setFormData(formData);
      };
    const ratingHandleChange =(rating) => {

    }

    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
      
      
        formData.set('author_id', sessionUser.id);
        formData.set('business_id', busId);
        // formData.append('body', body);
        // formData.append('rating', rating);
        // formData.append('photo', photo)

        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
          }
        // dispatch(createReview(formData));
    };

    return (
        <>
            <Navigation showFlag={false} />

            <div id="newReviewContainer">
                <div id="leftGutter"></div>
                <div id="center">
                    <form>
                        <h2 className="title">{business.name}</h2>
                        <h1 className="italic">
                            Leave a Rating, a Review and attach photos if you
                            would like
                        </h1>
                        <RatingInput
                            name="rating"
                            value={formData.rating}
                            handleChange={handleChange}
                            
                        />

                        {/* {formData.rating > 0 ? ( */}
                            <ReviewNewForm
                                name="body"
                                value={formData.body}
                                handleChange={handleChange}
                            />
                        {/* ) : (
                            <h2>First a rating</h2>
                        )} */}

                        {/* {rating > 0 && formData.body ? ( */}
                            <PhotoUpload name="photo" value={formData.photo} handleChange={handleChange}/>
                         {/* ) : null} */}
                        <ReviewNewSubmit submitHandler={submitHandler} />
                    </form>
                </div>
                <div id="rightGutter"></div>
            </div>
        </>
    );
};

export default ReviewNew;
