import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";
import ReviewNewForm from "../ReviewNewForm/ReviewNewForm";
import RatingInput from "../RatingInput/RatingInput";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import ReviewNewSubmit from "../ReviewNewSubmit/ReviewNewSubmit";
import { getBusiness } from "../../../store/businesses";
import { createReview } from "../../../store/reviews";
import { getUser } from "../../../store/session";
import NavBar from "../../Navigation/NavBar/NavBar";
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
    const [photoFile, setPhotoFile] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);
    // const [photoUrl, setPhotoUrl] = useState('');
    const flag = formData.get("review[body]");
    let preview = null;
    if (photoUrl) preview = <img src={photoUrl} alt="" />;
 

    useEffect(() => {
        setUserId(sessionUser.id);
        setRating(rating);
        setBody(body);
    }, [sessionUser, rating, body]);

    if (!business) <Redirect to="/home" />;

    const handleChange = (e) => {
        const { name, value } = e.target;
        formData.set(`review[${name}]`, value);
        setFormData(formData);
        if (name === "rating") setRating(value);
        if (name === "body") setBody(value);
    };

    // const handleFile = ({ currentTarget }) => {
    //     const file = currentTarget.files[0];
    //     formData.append("review[photo]", file);
    //     setFormData(formData);
    // };
    const handleFile = ({ currentTarget }) => {
        console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
        const file = currentTarget.files[0];

        console.log('FIIILLLEEE', file)
        setPhotoFile(file);
        if (file) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => setPhotoUrl(fileReader.result);
          }
        
        else setPhotoUrl(null);
      }
    const handleMouseOver = e => {
        e.preventDefault();
        console.log('KKKKKKKK', e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        formData.set("review[author_id]", +sessionUser.id);
        formData.set("review[business_id]", +busId);
        formData.set("review[body]", body);
        formData.set("review[rating]", +rating);
        if (photoFile) {
            formData.append('post[photo]', photoFile);
          }
        
        // for (const [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        //   }

        try {
            dispatch(editReview(formData));
            setFormData(null);
            setBody(null);
            setRating(null);

            history.push(`/businesses/${busId}`)
        } catch (errors) {
            console.error("dispatch redirect did not work");
        }
    };

    return (
        <>
            <NavBar showFlag={false} />
            <div id="newReviewContainer">
                <div id="leftGutter"></div>
                <div id="center">
                    <form id="reviewForm">
                        <h2 className="title">{business.name}</h2>
                        <h1 className="italic">
                            Leave a Rating, a Review and attach photos if you
                            would like
                        </h1>
                        <RatingInput
                            id="ratingReview"
                            name="rating"
                            value={formData.rating}
                            rating={rating}
                            handleChange={handleChange}
                            // handleRatingChange={handleRatingChange}
                        />
                        {rating > 0 ? (
                            <ReviewNewForm
                            id="ratingReview"
                                name="body"
                                value={formData.body}
                                // handleBodyChange={handleBodyChange}
                                handleChange={handleChange}
                            />
                        ) : (
                            <h2>First a rating</h2>
                        )}

                
                            <PhotoUpload
                                name="photo"
                                value={photo}
                                handleFile={handleFile}
                                preview='preview'
                                
                            />
                      
                        <ReviewNewSubmit submitHandler={submitHandler} />
                    </form>
                </div>
                <div id="rightGutter"></div>
            </div>
        </>
    );
};

export default ReviewNew;
