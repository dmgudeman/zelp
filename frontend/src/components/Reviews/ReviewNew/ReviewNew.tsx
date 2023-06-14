import React, { ChangeEvent, SyntheticEvent } from "react";
import { useEffect, useState, useRef } from "react";
import { useDispatch as _useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";
import ReviewForm from "../ReviewForm/ReviewForm";
import RatingInput from "../RatingInput/RatingInput";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import { getBusiness } from "../../../store/businessesSlice";

import {
    createReview,
    fetchReviewsByBusiness,
} from "../../../store/reviewsSlice";
import { getCurrentUser } from "../../../store/sessionSlice";
import "./ReviewNew.css";
import type { IReviewNewProps } from "../../../Types/IComponents/IReviews";
import type { AppDispatch } from "../../../store/store";
const useDispatch = () => _useDispatch<AppDispatch>();

const ReviewNew: React.FC<IReviewNewProps> = ({
    business,
    handleCloseReviewNew,
}) => {
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

    const fileRef = useRef(null);
    // const flag = formData.get("review[body]");

    useEffect(() => {
        // dispatch(fetchReviewsByBusiness(business.id));
        setUserId(currentUser?.id || null);
        setRating(rating);
        setBody(body);
        setPhoto(photo);
    }, [currentUser]);

    if (!business) <Redirect to="/home" />;

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     formData.set(`review[${name}]`, value);
    //     setFormData(formData);
    //     if (name === "rating") setRating(value);
    //     if (name === "body") setBody(value);
    // };
    const handleRatingChange: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        const { value } = e.target;
        formData.set(`review[rating]`, value);
        setFormData(formData);
        setRating(parseInt(value));
    };

    const handleReviewFormChange: React.ChangeEventHandler<
        HTMLTextAreaElement
    > = (e) => {
        const { value } = e.target;
        formData.set(`review[body]`, value);
        setFormData(formData);
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
                formData.set("review[business_id]", business.id.toString());
                formData.set("review[rating]", rating?.toString() || "");

                for (let pair of formData.entries()) {
                    console.log(pair[0] + ", " + pair[1]);
                }

                dispatch(createReview(formData));
                // setFormData(null);
                setBody(null);
                setRating(null);
                setPhotoUrl(null);
                // fileRef?.current?.value = null;
                handleCloseReviewNew();
                history.push(`/businesses/${business.id}`);
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
                    <RatingInput
                        className="ratingReview"
                        name="rating"
                        value={rating}
                        rating={rating}
                        handleRatingChange={handleRatingChange}
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
