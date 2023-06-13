import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import ReviewForm from "../ReviewForm/ReviewForm";
import RatingInput from "../RatingInput/RatingInput";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import ReviewNewSubmit from "../ReviewNewSubmit/ReviewNewSubmit";
import {
    deleteReview,
    createReview,
    getReview,
    fetchReview,
} from "../../../store/reviewsSlice";
import { getCurrentUser } from "../../../store/sessionSlice";
import NavBar from "../../Navigation/NavBar/NavBar";
import "./ReviewEdit.css";

const ReviewEdit = ({ reviewId, handleClose }) => {
    const dispatch = useDispatch();
    // const { reviewId } = useParams();
    const review = useSelector(getReview(reviewId));
    const history = useHistory();
    const [busId, setBusId] = useState(null);
    const [rating, setRating] = useState(null);
    const [body, setBody] = useState("");
    const [photoUrl, setPhotoUrl] = useState(null);
    const [showPhoto, setShowPhoto] = useState(true);
    const [photo, setPhoto] = useState(null);
    const sessionUser = useSelector(getCurrentUser);
    const [formData, setFormData] = useState(new FormData());
    const [userId, setUserId] = useState(sessionUser.id || "");

    // console.log('ReviewEdit', reviewId)
    // console.log('busId', busId);
    // console.log('review', review);
    // console.log('rating', rating);
    // console.log('photoUrl', photoUrl)

    useEffect(() => {
        console.log("UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU", reviewId);
        dispatch(fetchReview(reviewId))
            .then((review) => {
                console.log("inside", review);
                setBusId(review.payload.businessId);
                setRating(review.payload.rating);
                setBody(review.payload.body);
                setPhotoUrl(review.payload.photoUrl);
            })
            .catch((error) => console.error(error));
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

    const handleFile = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.target.files[0];

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
    const submitHandler = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log("Session User", sessionUser);
        formData.set("review[author_id]", +sessionUser.user.id);
        formData.set("review[business_id]", +busId);
        formData.set("review[rating]", +rating);
        formData.set("review[body]", body);
        formData.set("review[photoUrl]", photoUrl);
        //     console.log(`${key}: ${value}`);

        console.log(sessionUser);
        console.log("sessionUser.id", sessionUser.user.id);
        console.log("busId", busId);
        console.log("rating", rating);
        console.log("body", body);
        console.log("photoUrl", photoUrl);
        try {
            // await dispatch(deleteReview(reviewId));
            await dispatch(createReview(formData));
            setFormData(null);
            setBody(null);
            setRating(null);
            handleClose();
            history.push(`/businesses/${busId}`);
        } catch (errors) {
            console.error("dispatch redirect did not work");
        }
    };

    let preview = null;
    if (photoUrl) preview = <img className="imgRN" src={photoUrl} alt="" />;
    return (
        <>
            <NavBar showFlag={"none"} />
            <div
                id="combinedFormContainerRE"
                onClick={(e) => e.stopPropagation()}
            >
                <form id="formRE">
                    <h2 id="titleBigRE">Edit Your Review</h2>
                    <div id="ratingContainerRE">
                        <RatingInput
                            id="ratingReview"
                            name="rating"
                            rating={rating}
                            setRating={setRating}
                            handleChange={handleChange}
                        />
                    </div>
                    <div id="inputContainerRE">
                        <ReviewForm
                            name="body"
                            value={body}
                            handleChange={handleChange}
                        />
                    </div>
                    <div id="photoContainerRE">
                        {preview}
                        <PhotoUpload
                            name="photo"
                            photoUrl={photoUrl}
                            setPhotoUrl={setPhotoUrl}
                            title="Change Photo"
                            handleChange={handleFile}
                        />
                    </div>
                    <div className="reviewButton">
                        <ReviewNewSubmit submitHandler={submitHandler} />
                    </div>
                </form>
            </div>
        </>
    );
};

export default ReviewEdit;
