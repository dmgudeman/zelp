import React, { ChangeEvent, SyntheticEvent } from "react";
import { useEffect, useState, useRef } from "react";
import { useDispatch as _useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";
import ReviewForm from "../ReviewForm/ReviewForm";
import RatingInputEdit from "../RatingInput/RatingInputEdit";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import { hideEditReviewModal } from "../../../store/uiSlice";
import { updateReview } from "../../../store/reviewsSlice";
import { getBusiness } from "../../../store/businessesSlice";

import {
    createReview,
    fetchReviewsByBusiness,
} from "../../../store/reviewsSlice";
import { getCurrentUser } from "../../../store/sessionSlice";
import type { IReviewEditProps} from "../../../Types/IComponents/IReviews";
import type { AppDispatch } from "../../../store/store";
import "./ReviewEdit.css";

const useDispatch = () => _useDispatch<AppDispatch>();

const ReviewEdit: React.FC<IReviewEditProps> = ({
    review,
    handleCloseReviewEdit,
}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const session = useSelector(getCurrentUser);
    const currentUser = session?.user;
    const [userId, setUserId] = useState(currentUser?.id || null);
    const [busId, setBusId] = useState<number>(review.businessId);
    const [body, setBody] = useState<string | "">(review.body);
    const [rating, setRating] = useState<number | null >(review.rating);
    // photoUrl is for preview
    const [photoUrl, setPhotoUrl] = useState<string | "">(review.photoUrl);
    // photo is an actual file
    const [photo, setPhoto] = useState<File | null>(null); // this is file from userComputer
    const [formData, setFormData] = useState<FormData>(new FormData());

    const fileRef = useRef(null);
    // const flag = formData.get("review[body]");

    useEffect(() => {
        // dispatch(fetchReviewsByBusiness(business.id));
        setUserId(currentUser?.id || null);
        setRating(rating);
        setBody(body);
        setPhoto(photo);
    }, [currentUser]);

    useEffect(() => {
        formData.set("review[rating]", rating?.toString() || "");
    }, [rating]);
    useEffect(() => {
        console.log('body', body)
        formData.set("review[body]", body || "");
    }, [body]);


    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     formData.set(`review[${name}]`, value);
    //     setFormData(formData);
    //     if (name === "rating") setRating(value);
    //     if (name === "body") setBody(value);
    // };
    const handleEditRatingChange: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        console.log('IIIMMM  99999999')
        const { value } = e.target;
        console.log('Rating', rating)
        // formData.set(`review[rating]`, value);
        setRating(parseInt(value));
        console.log('Rating', rating)
    };

    const handleReviewFormChange: React.ChangeEventHandler<
        HTMLTextAreaElement
    > = (e) => {
        const { value } = e.target;
        formData.set(`review[body]`, value);
        // setFormData(formData);
        setBody(value);
    };

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            formData.set("review[photo]", file);
            setPhoto(file);
            // setFormData(formData);
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => setPhotoUrl(fileReader.result as string);
        } else setPhotoUrl("");
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (currentUser && currentUser.id) {
            try {
                
                formData.set("review[author_id]", currentUser.id.toString());
                formData.set("review[business_id]", (+busId || "").toString());
                formData.set("review[rating]", rating?.toString() || "");
                formData.set("review[body]", body || "");
                if (photo) {
                    formData.set("review[photo]", photo)
                } 

                for (let pair of formData.entries()) {
                    console.log(pair[0] + ", " + pair[1]);
                }


                dispatch(updateReview({reviewId: review.id, formData}));
                // setFormData(null);
                // setBody("");
                // setRating(0);
                // setPhotoUrl("");
                // fileRef?.current?.value = null;
                dispatch(hideEditReviewModal());
                history.push(`/businesses/${busId}`);
            } catch (errors) {
                console.error("dispatch redirect did not work");
            }
        }
    };
    let preview = null;
    if (photoUrl) preview = <img className="imgRE" src={photoUrl} alt="" />;

    return (
        <>
            <div
                id="combinedFormContainerRE"
                onClick={(e) => e.stopPropagation()}
            >
                <form id="formRE" onSubmit={submitHandler}>
                    <h2 id="titleBigRE">Edit Your Review</h2>
                    <div id="ratingContainerRE">
                        <RatingInputEdit
                            className="ratingReview"
                            name="rating"
                            value={rating}
                            rating={rating}
                            handleEditRatingChange={handleEditRatingChange}
                        />
                    </div>
                    <div id="inputContainerRE">
                        <ReviewForm
                            name="body"
                            value={body}
                            handleReviewFormChange={handleReviewFormChange}
                        />
                    </div>
                    <div id="photoContainerRE">
                        {preview}
                        <PhotoUpload
                            // name="photo"
                            // photoUrl={photoUrl}
                            // setPhotoUrl={setPhotoUrl}
                            title="Change Photo"
                            handleChange={handleFile}
                        />
                    </div>
                    <div className="reviewButton">
                        <button
                            type="submit"
                            className="newReviewSubmit blueButton"
                        >
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ReviewEdit;
