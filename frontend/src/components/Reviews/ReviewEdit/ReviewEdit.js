import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";
import ReviewNewForm from "../ReviewNewForm/ReviewNewForm";
import RatingInput from "../RatingInput/RatingInput";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import ReviewNewSubmit from "../ReviewNewSubmit/ReviewNewSubmit";

import { editReview, getReview, fetchReview } from "../../../store/reviews";
import { getUser } from "../../../store/session";

import NavBar from "../../Navigation/NavBar/NavBar";
import "./ReviewEdit.css";
// import { getBusiness } from "../../../store/businesses";

const ReviewEdit = (props) => {
    const dispatch = useDispatch();
    const { reviewId } = useParams();
    const history = useHistory();

    const review = useSelector(getReview(reviewId));
    // const business = useSelector(getBusiness(review.business_id))
    const sessionUser = useSelector(getUser);
    const [body, setBody] = useState( "");
    const [rating, setRating] = useState( 0);
    const [formData, setFormData] = useState(new FormData());
    const [userId, setUserId] = useState(sessionUser.id || "");



    // useEffect(() => {
    //     if (reviewId) {
    //        dispatch(fetchReview(reviewId));
         
    //     }
    // }, [dispatch, reviewId]);

    // useEffect(() => {
    //     setUserId(sessionUser.id);
    //     if (reviewId) {
    //         let x = dispatch(fetchReview(reviewId));
    //         console.log("XXXXXX", x);
    //     }
    //     if (review) {
    //         setRating(review.rating);
    //         if (review.body) setBody(review.body);
    //     }
    // }, [sessionUser]);

    // if (!review) history.goBack();

    const handleChange = (e) => {
        const { name, value } = e.target;
        formData.set(`review[${name}]`, value);
        setFormData(formData);
        // if (name === "rating") setRating(value);
        // if (name === "body") setBody(value);
    };
    // const handleRatingChange = (newRating) => {
    //     console.log('nreRating', rating)
    //     setRating(newRating);
    //     // ratingOnChange(newRating);
    // };
    // const handleBodyChange = ({currentTarget}) => {
    //     console.log(currentTarget.value)
    //     setBody(currentTarget.value)
    // }

    const handleFile = ({ currentTarget }) => {
        const file = currentTarget.files[0];
        formData.append("review[photo]", file);
        setFormData(formData);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // formData.set("review[author_id]", +sessionUser.id);
        // formData.set("review[business_id]", +;
        // formData.set("review[rating]", +rating);
        // for (const [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        //   }

        try {
            console.log("frrrommmData", formData);
            dispatch(editReview(formData));
            // setFormData(null);
            // setBody(null);
            // setRating(null);
            // history.push(`/businesses/${review.business_id}`)
        } catch (errors) {
            console.error("dispatch redirect did not work");
        }
    // };
    // // if ( true) return <h2>Hi there</h2>
    // if (!review) {
    //     // Handle the case when the review is not found
    //     // For example, you can redirect or display an error message
    //     return <p>Review not found</p>;
    }
    return (
        <>
            <NavBar showFlag={false} />
            <div id="newReviewContainer">
                <div id="leftGutter"></div>
                <div id="center">
                    <form id="reviewForm">
                        
                        <RatingInput
                            id="ratingReview"
                            name="rating"
                            value={formData.rating}
                            rating={rating}
                            handleChange={handleChange}
                            // handleRatingChange={handleRatingChange}
                        />
                      
                            <ReviewNewForm
                            id="ratingReview"
                                name="body"
                                value={formData.body}
                                // handleBodyChange={handleBodyChange}
                                handleChange={handleChange}
                            />
                  

                       
                            <PhotoUpload
                                name="photo"
                                value={formData.photo}
                                handleChange={handleFile}
                            />
                      
                        <ReviewNewSubmit submitHandler={submitHandler} />
                    </form>
                </div>
                <div id="rightGutter"></div>
            </div>
        </>
    );
};


export default ReviewEdit;
