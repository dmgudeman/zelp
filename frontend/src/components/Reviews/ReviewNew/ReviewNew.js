import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";
import ReviewNewForm from "../ReviewNewForm/ReviewNewForm";
import RatingInput from "../RatingInput/RatingInput";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import ReviewNewSubmit from "../ReviewNewSubmit/ReviewNewSubmit";
import { getBusiness} from "../../../store/businesses";

import { createReview, fetchReviewsByBusiness } from "../../../store/reviews";
import { getUser } from "../../../store/session";
import Navigation from "../../Navigation/NavBar/NavBar";
import "./ReviewNew.css";

const ReviewNew = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { busId } = useParams();
    let business = useSelector(getBusiness(busId));
    const sessionUser = useSelector(getUser);
    const [formData, setFormData] = useState(new FormData());
    const [userId, setUserId] = useState(sessionUser.id || "");
    const [body, setBody] = useState("");
    const [rating, setRating] = useState(0);
    // photo is an actual file
    const [photo, setPhoto] = useState(null);
    // photoUrl is for preview
    const [photoUrl, setPhotoUrl] = useState('')
    const flag = formData.get("review[body]");

    useEffect(() => {
        dispatch(fetchReviewsByBusiness(busId));
        setUserId(sessionUser.id);
        setRating(rating);
        setBody(body);
        // setPhoto(photo);
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
            
          }
          else setPhotoUrl(null);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        formData.set("review[author_id]", +sessionUser.id);
        formData.set("review[business_id]", +busId);
        formData.set("review[rating]", +rating);
        // for (const [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        //   }

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
            <Navigation showFlag={false} />
            <div id="newReviewContainer">
                <div id="leftGutter"></div>
                <div id="center">
                    <form id="reviewForm">
                        <h2 className="blueTitleBig">{business.name}</h2>
                        <h1 className="italic">
                            Leave a Rating, a Review and attach photos if you
                            would like
                        </h1>
                        <RatingInput
                            className="ratingReview"
                            name="rating"
                            value={formData.rating}
                            rating={rating}
                            handleChange={handleChange}
                            // handleRatingChange={handleRatingChange}
                        />

                        {rating > 0 ? (
                            <>
                                <ReviewNewForm
                                    id="ratingReview"
                                    name="body"
                                    value={formData.body}
                                    // handleBodyChange={handleBodyChange}
                                    handleChange={handleChange}
                                />
                                {preview}
                                <PhotoUpload
                                    name="photo"
                                    value={formData.photo}
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
                <div id="rightGutter"></div>
            </div>
        </>
    );
};

export default ReviewNew;
