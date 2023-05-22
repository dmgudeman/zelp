import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";
import ReviewNewForm from "../ReviewNewForm/ReviewNewForm";
import RatingInput from "../RatingInput/RatingInput";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import ReviewNewSubmit from "../ReviewNewSubmit/ReviewNewSubmit";

import { editReview, deleteReview, createReview, getReview, fetchReview } from "../../../store/reviews";
import { getUser } from "../../../store/session";

import NavBar from "../../Navigation/NavBar/NavBar";
import "./ReviewEdit.css";
// import { getBusiness } from "../../../store/businesses";

const ReviewEdit = (props) => {
    const dispatch = useDispatch();
    const { reviewId } = useParams();
    const review = useSelector(getReview(reviewId));
    const history = useHistory();
    const [busId, setBusId] = useState(review?.businessId)
    const [rating, setRating] = useState(review?.rating);
    const [body, setBody] = useState(review?.body);
    const [photoUrl, setPhotoUrl] = useState(review?.photoUrl);
    const [showPhoto, setShowPhoto] = useState(true);
    const [photo, setPhoto] = useState(null);
    const sessionUser = useSelector(getUser);
    const [formData, setFormData] = useState(new FormData());
    const [userId, setUserId] = useState(sessionUser.id || "");

    useEffect(() => {
        let rev;
        if (reviewId) {
            try {
          rev  =    dispatch(fetchReview(reviewId));
            } catch (error) {
                console.error(error);
            }
            console.log('REV', review)
        }
    }, [reviewId]);

    // useEffect(() => {
    //     // setUserId(sessionUser.id);
    //     setRating(rating);
    //     setBody(body);
    //     setPhotoUrl(photoUrl)
    // }, [sessionUser, rating, body, photoUrl]);

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
        // console.log("CURRENT TARGET", currentTarget.files[0]);
        // const file = await currentTarget.files[0];
        // formData.set("review[photo]", file);
        //  const file = "https://zelp99-dev.s3.us-west-1.amazonaws.com/3926ucminwqy77j47uuk1yd1lcao?response-content-disposition=inline%3B%20filename%3D%22logo.png%22%3B%20filename%2A%3DUTF-8%27%27logo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAV35DSJ5S7XULJXUL%2F20230514%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20230514T204416Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=68a990b0d14ada1fc4baedfd155873b94ba37295b97fb38e08fbd7f043059fb4"
        setPhotoUrl(file);
        // setShowPhoto(false);
         // to set a preview
         if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => setPhotoUrl(fileReader.result);
            
          }
          else setPhotoUrl(null);
    };

    // const submitHandler = async (e) => {
    //     console.log("TTTTTTTTTTTT", reviewId);
    //     e.preventDefault();
    //     e.stopPropagation();
    //     setBody(body);
    //     setRating(rating);
    //     try {
    //         console.log("RRRRRRRRRRRRR", reviewId);

    //         const formData = new FormData();
    //         formData.set("review[author_id]", +sessionUser.id);
    //         formData.set("review[business_id]", +review.businessId);
    //         formData.set("review[rating]", +rating);
    //         formData.set("review[body]", body);
    //         formData.set("review[photoUrl]", photoUrl);
    //         formData.set("review[id]", reviewId);

    //         // for (const [key, value] of formData.entries()) {
    //         //     console.log(`${key}: ${value}`);
    //         // }
    //         // return  formData

    //         console.log("formDataaaaaaa", formData);
    //         dispatch(editReview(formData, reviewId));
    //         history.push(`/businesses/${review.businessId}`);
    //         // history.goBack();
    //     } catch (errors) {
    //         console.error("dispatch redirect did not work");
    //     }
    // };
    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(deleteReview(reviewId));
        setBusId(review.business_id)
        formData.set("review[author_id]", +sessionUser.id);
        formData.set("review[business_id]", +busId);
        formData.set("review[rating]", +rating);
        formData.set("review[body]", body);
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
          }
        try {
            dispatch(createReview(formData));
            setFormData(null);
            setBody(null);
            setRating(null);
            // fileRef.current.value=null;
            history.push(`/businesses/${busId}`);
        } catch (errors) {
            console.error("dispatch redirect did not work");
        }
    };

    // const submit1Handler = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     // formData.set("review[author_id]", +sessionUser.id);
    //     // formData.set("review[business_id]", +;
    //     // formData.set("review[rating]", +rating);

    //     for (const [key, value] of formData.entries()) {
    //         console.log(`${key}: ${value}`);
    //     }

    //     try {
    //         console.log("frrrommmData", formData);
    //         dispatch(editReview(formData));
    //         setFormData(null);
    //         setBody(null);
    //         setRating(null);
    //         history.push(`/businesses/${review.business_id}`)
    //     } catch (errors) {
    //         console.error("dispatch redirect did not work");
    //     }
    //     // };
    //     // // if ( true) return <h2>Hi there</h2>
    //     // if (!review) {
    //     //     // Handle the case when the review is not found
    //     //     // For example, you can redirect or display an error message
    //     //     return <p>Review not found</p>;
    // };
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
                        {/* {showPhoto ? (
                            <div>
                                <img
                                    className="formPhoto"
                                    src={photoUrl}
                                    alt=""
                                />
                            </div>
                        ) : null} */}
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
