import { useEffect, useState, useCallback } from "react";
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
    const [rating, setRating] = useState(0);
    const [body, setBody] = useState("");
    const [photoUrl, setPhotoUrl] = useState('');

    const review = useSelector(getReview(reviewId));
    const sessionUser = useSelector(getUser);

    const [formData, setFormData] = useState(new FormData());
    const [userId, setUserId] = useState(sessionUser.id || "");

    useEffect(() => {
        if (reviewId) {
            dispatch(fetchReview(reviewId))
            .then((res) => {
                setBody(res.body);
                setRating(res.rating);
                setPhotoUrl(res.photoUrl)
            })
        }
      
    }, [dispatch, reviewId]);

    // useEffect(() => {
    //     if (review) {
    //         setBody(review.body);
    //         setRating(review.rating);
    //         setPhotoUrl(review.photoUrl)
    //         // console.log('review.id', review.id)
    //         // console.log('photoURL', photoUrl)
    //     }
      
      
    // }, [review]);

    useEffect(() => {
        setUserId(sessionUser.id);
    }, [sessionUser.id]);

    // if (!review) history.goBack();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "rating") setRating(value);
        if (name === "body") setBody(value);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleBodyChange = ({ currentTarget }) => {
        setBody(currentTarget.value);
    };

    const handleFile = ({ currentTarget }) => {
        console.log('CURRENT TARGET', currentTarget.files[0])
        const file = currentTarget.files[0];
        //  const file = "https://zelp99-dev.s3.us-west-1.amazonaws.com/3926ucminwqy77j47uuk1yd1lcao?response-content-disposition=inline%3B%20filename%3D%22logo.png%22%3B%20filename%2A%3DUTF-8%27%27logo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAV35DSJ5S7XULJXUL%2F20230514%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20230514T204416Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=68a990b0d14ada1fc4baedfd155873b94ba37295b97fb38e08fbd7f043059fb4"
        setPhotoUrl(file);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        formData.set("review[author_id]", +sessionUser.id);
        formData.set("review[business_id]", +review.businessId);
        formData.set("review[rating]", +rating);
        formData.set("review[body]", body);
        formData.set("review[photoUrl]", photoUrl);

        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        try {
            console.log("formData", formData);
            dispatch(editReview(formData));
            // ...
        } catch (errors) {
            console.error("dispatch redirect did not work");
        }
    };

    const submit1Handler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // formData.set("review[author_id]", +sessionUser.id);
        // formData.set("review[business_id]", +;
        // formData.set("review[rating]", +rating);

        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

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
    };
    if (!review) return null;

    return (
        <>
            <NavBar showFlag={false} />
            <div id="newReviewContainer">
                <div id="leftGutter"></div>
                <div id="center">
                    <form id="reviewForm">
                        <h2>rating {rating}</h2>
                        <RatingInput
                            id="ratingReview"
                            name="rating"
                            rating={rating}
                            setRating={setRating}
                            handleChange={handleChange}
                        />

                        <ReviewNewForm
                            id="ratingReview"
                            name="body"
                            value={body}
                            handleChange={handleChange}
                        />
                        {photoUrl ? (
                            <div id="photoRatingCell">
                                <img id="imgRDC" src={photoUrl} alt="" />
                                
                            </div>
                        ) : null}

                        <PhotoUpload
                            name="photo"
                            photoUrl={photoUrl}
                            setPhotoUrl={setPhotoUrl}
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
