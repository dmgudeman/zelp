import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";
import ReviewNewForm from "../ReviewForm/ReviewForm";
import RatingInput from "../RatingInput/RatingInput";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import ReviewNewSubmit from "../ReviewNewSubmit/ReviewNewSubmit";
import { getBusiness } from "../../../store/businesses";

import { createReview, fetchReviewsByBusiness } from "../../../store/reviews";
import { getUser } from "../../../store/session";
import Navigation from "../../Navigation/NavBar/NavBar";
import "./ReviewNew.css";

const ReviewNew = ({businessId, handleCloseReviewNew}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    let business = useSelector(getBusiness(businessId));
    const sessionUser = useSelector(getUser);
    const [formData, setFormData] = useState(new FormData());
    const [userId, setUserId] = useState(sessionUser.id || "");
    const [body, setBody] = useState("");
    const [rating, setRating] = useState(0);
    const fileRef = useRef(null);
    // photo is an actual file
    const [photo, setPhoto] = useState(null);
    // photoUrl is for preview
    const [photoUrl, setPhotoUrl] = useState("");
    // const flag = formData.get("review[body]");
 
    useEffect(() => {
        dispatch(fetchReviewsByBusiness(businessId));
        setUserId(sessionUser.id);
        setRating(rating);
        setBody(body);
        setPhoto(photo);
    }, [sessionUser, rating]);

    if (!business) <Redirect to="/home" />;
    const handleChange = (e) => {
        const { name, value } = e.target;
        formData.set(`review[${name}]`, value);
        setFormData(formData);
        if (name === "rating") setRating(value);
        if (name === "body") setBody(value);
    };

    const handleFile = ({ currentTarget }) => {
        const file = currentTarget.files[0];
        formData.append("review[photo]", file);
        setPhoto(file);
        setFormData(formData);

        // to set a preview
        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => setPhotoUrl(fileReader.result);
        } else setPhotoUrl(null);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        formData.set("review[author_id]", +sessionUser.id);
        formData.set("review[business_id]", +businessId);
        formData.set("review[rating]", +rating);
        try {
            dispatch(createReview(formData));
            setFormData(null);
            setBody(null);
            setRating(null);
            fileRef.current.value = null;
            handleCloseReviewNew();
            history.push(`/businesses/${businessId}`);

        } catch (errors) {
            console.error("dispatch redirect did not work");
        }
    };
    let preview = null;
    if (photoUrl) preview = <img className="imgRN" src={photoUrl} alt="" />;

    return (
        <>
            <div id="combinedFormContainerNR" onClick={(e)=> e.stopPropagation()}>
                    <form id="formNR">
                        <h2 className="blueTitleBig title">{business.name}</h2>
                        <h1 className="italic">
                            Leave a Rating, a Review and attach photos if you
                            would like
                        </h1>
                        <RatingInput
                            className="ratingReview"
                            name="rating"
                            value={rating}
                            rating={rating}
                            handleChange={handleChange}
                        />

                        {rating > 0 ? (
                            <>
                                <ReviewNewForm
                                    id="ratingReview"
                                    name="body"
                                    value={body}
                                    handleChange={handleChange}
                                />
                                {preview}
                                <PhotoUpload
                                    name="photo"
                                    fileRef={fileRef}
                                    value={photo}
                                    title="Add Photo"
                                    handleChange={handleFile}
                                />
                                <ReviewNewSubmit
                                    submitHandler={submitHandler}
                                />
                            </>
                        ) : (
                            <h2 className="blueTitle">Rate this business</h2>
                        )}
                    </form>
            </div>
        </>
    );
};

export default ReviewNew;
