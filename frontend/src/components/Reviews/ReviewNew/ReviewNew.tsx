import React, { ChangeEvent, SyntheticEvent } from "react";
import { useEffect, useState, useRef } from "react";
import { useDispatch as _useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import ReviewForm from "../ReviewForm/ReviewForm";
import RatingInputNew from "../RatingInput/RatingInputNew";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import { hideNewReviewModal } from "../../../store/uiSlice";
import { createReview } from "../../../store/reviewsSlice";
import { getCurrentUser } from "../../../store/sessionSlice";
import "./ReviewNew.css";
import type { IReviewNewProps } from "../../../Types/IComponents/IReviews";
import type { AppDispatch } from "../../../store/store";

const useDispatch = () => _useDispatch<AppDispatch>();

const ReviewNew: React.FC<IReviewNewProps> = ({ business }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const session = useSelector(getCurrentUser);
    const currentUser = session?.user;
    const [userId, setUserId] = useState(currentUser?.id || null);
    const [formData, setFormData] = useState<FormData>(new FormData());
    const [body, setBody] = useState<string | null>(null);
    const [rating, setRating] = useState<number | null>(0);
    // photoUrl is for preview
    const [photoUrl, setPhotoUrl] = useState<string | null>(null);
    // photo is an actual file
    const [photo, setPhoto] = useState<File | null>(null); // this is file from userComputer

    useEffect(() => {
        setUserId(currentUser?.id || null);
    }, [currentUser]);
    useEffect(() => {
        formData.set("review[rating]", rating?.toString() || "");
    }, [rating]);

    if (!business) <Redirect to="/home" />;

    const handleNewRatingChange: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        console.log("IIIMMM  222222222");
        const { value } = e.target;
        // formData.set(`review[rating]`, value);
        setRating(parseInt(value));
    };

    const handleReviewFormChange: React.ChangeEventHandler<
        HTMLTextAreaElement
    > = (e) => {
        const { value } = e.target;
        formData.set(`review[body]`, value);
        setBody(value);
    };

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            formData.set("review[photo]", file);
            setPhoto(file);
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
                formData.set("review[business_id]", business.id.toString());
                formData.set("review[rating]", rating?.toString() || "");
                formData.set("review[body]", body || "");

                for (let pair of formData.entries()) {
                    console.log(pair[0] + ", " + pair[1]);
                }

                dispatch(createReview(formData));
                setBody(null);
                setRating(null);
                setPhotoUrl(null);
                dispatch(hideNewReviewModal());
                // history.push(`/businesses/${business.id}`);
            } catch (errors) {
                console.error("dispatch redirect did not work");
            }
        }
    };
    let preview = null;
    if (photoUrl) preview = <img className="imgRN" src={photoUrl} alt="" />;

    return (
        <>
            <div
                id="combinedFormContainerNR"
                onClick={(e) => e.stopPropagation()}
            >
                <form id="formNR" onSubmit={submitHandler}>
                    <h2 className="blueTitleBig title">{business?.name}</h2>
                    <h1 className="italic">
                        Leave a Rating, a Review and attach photos if you would
                        like
                    </h1>
                    <RatingInputNew
                        className="ratingReview"
                        name="rating"
                        value={rating}
                        rating={rating}
                        handleNewRatingChange={handleNewRatingChange}
                    />

                    {rating ? (
                        <>
                            <ReviewForm
                                name="body"
                                value={body}
                                handleReviewFormChange={handleReviewFormChange}
                            />

                            {preview}
                            <PhotoUpload
                                title="Add Photo"
                                handleChange={handleFile}
                            />
                            <button
                                type="submit"
                                className="newReviewSubmit blueButton"
                            >
                                Submit Review
                            </button>
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
