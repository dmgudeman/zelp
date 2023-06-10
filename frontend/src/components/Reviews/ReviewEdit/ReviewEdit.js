import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import ReviewNewForm from "../ReviewNewForm/ReviewNewForm";
import RatingInput from "../RatingInput/RatingInput";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import ReviewNewSubmit from "../ReviewNewSubmit/ReviewNewSubmit";
import {
    deleteReview,
    createReview,
    getReview,
    fetchReview,
} from "../../../store/reviews";
import { getUser } from "../../../store/session";
import NavBar from "../../Navigation/NavBar/NavBar";
import "./ReviewEdit.css";

const ReviewEdit = (props) => {
    const dispatch = useDispatch();
    const { reviewId } = useParams();
    // const review = useSelector(getReview(reviewId));
    const history = useHistory();
    const [busId, setBusId] = useState(null);
    const [rating, setRating] = useState(null);
    const [body, setBody] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);
    const [showPhoto, setShowPhoto] = useState(true);
    const [photo, setPhoto] = useState(null);
    const sessionUser = useSelector(getUser);
    const [formData, setFormData] = useState(new FormData());
    const [userId, setUserId] = useState(sessionUser.id || "");

    useEffect(() => {
        if (reviewId) {
            dispatch(fetchReview(reviewId))
                .then(review => {
                    setBusId(review.businessId);
                    setRating(review.rating);
                    setBody(review.body);
                    setPhotoUrl(review.photoUrl);
                })
                .catch(error => console.error(error));
        }
    }, [reviewId, dispatch]);
    
    useEffect(() => {
        setUserId(sessionUser.id);
    }, [sessionUser.id]);

    // if (!review) history.goBack();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "rating") setRating(value);
        if (name === "body") setBody(value);
    };

    const handleFile = async ({ currentTarget }) => {
        const file = currentTarget.files[0];
        formData.append("review[photo]", file);
        setPhoto(file);
        setFormData(formData);
        setPhotoUrl(file);
        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => setPhotoUrl(fileReader.result);
        } else setPhotoUrl(null);
    };

    // creates a new review
    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(deleteReview(reviewId));
        console.log( 'Session User', sessionUser)
        formData.set("review[author_id]", +sessionUser.id);
        formData.set("review[business_id]", +busId);
        formData.set("review[rating]", +rating);
        formData.set("review[body]", body);
        formData.set("review[photoUrl]", photoUrl)
        //     console.log(`${key}: ${value}`);
        try {
            dispatch(createReview(formData));
            setFormData(null);
            setBody(null);
            setRating(null);
            history.push(`/businesses/${busId}`);
        } catch (errors) {
            console.error("dispatch redirect did not work");
        }
    };

    let preview = null;
    if (photoUrl) preview = <img className="imgRN" src={photoUrl} alt="" />;
    return (
        <>
            <NavBar showFlag={false} />
            <div id="newReviewContainer">
                <div id="leftGutter"></div>
                <div id="center">
                    <form id="reviewForm">
                        <h2 className="blueTitleBig">Edit Your Review</h2>
                        <div className="ratingReview">
                            <RatingInput
                                id="ratingReview"
                                name="rating"
                                rating={rating}
                                setRating={setRating}
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="reviewInput">
                            <ReviewNewForm
                                name="body"
                                value={body}
                                handleChange={handleChange}
                            />
                        </div>
                        {preview}
                        <PhotoUpload
                            name="photo"
                            photoUrl={photoUrl}
                            setPhotoUrl={setPhotoUrl}
                            title="Change Photo"
                            handleChange={handleFile}
                        />
                        <div className="reviewButton">
                            <ReviewNewSubmit submitHandler={submitHandler} />
                        </div>
                    </form>
                </div>
                <div id="rightGutter"></div>
            </div>
        </>
    );
};

export default ReviewEdit;
