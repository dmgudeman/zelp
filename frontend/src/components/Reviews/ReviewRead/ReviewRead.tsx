import React, { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { useDispatch as _useDispatch, useSelector } from "react-redux";
import ReviewForm from "../ReviewForm/ReviewForm";
import RatingDisplayBusiness from "../RatingDisplay/RatingDisplayBusiness/RatingDisplayBusiness";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import { hideEditReviewModal } from "../../../store/uiSlice";
import { updateReview } from "../../../store/reviewsSlice";
import { getCurrentUser } from "../../../store/sessionSlice";
import type { IReviewEditProps } from "../../../Types/IComponents/IReviews";
import type { AppDispatch } from "../../../store/store";
import "./ReviewEdit.css";

const useDispatch = () => _useDispatch<AppDispatch>();

const ReviewRead: React.FC<IReviewEditProps> = ({ review }) => {
    const dispatch = useDispatch();
    const session = useSelector(getCurrentUser);
    const currentUser = session?.user;
    const [userId, setUserId] = useState(currentUser?.id || null);
    const [busId, setBusId] = useState<number>(review.businessId);
    const [body, setBody] = useState<string | "">(review.body);
    const [rating, setRating] = useState<number | null>(review.rating);
    // photoUrl is for preview
    const [photoUrl, setPhotoUrl] = useState<string | "">(review.photoUrl);
    // photo is an actual file
    const [photo, setPhoto] = useState<File | null>(null); // this is file from userComputer
    const [formData, setFormData] = useState<FormData>(new FormData());

    // useEffect(() => {
    //     setUserId(currentUser?.id || null);
    //     setRating(rating);
    //     setBody(body);
    //     setPhoto(photo);
    // }, [currentUser]);

    // useEffect(() => {
    //     // formData.set("review[rating]", rating?.toString() || "");
    // }, [rating]);
    // useEffect(() => {
    //     console.log("body", body);
    //     // formData.set("review[body]", body || "");
    // }, [body]);

    // const handleEditRatingChange: React.ChangeEventHandler<HTMLInputElement> = (
    //     e
    // ) => {
    //     const { value } = e.target;
    //     formData.set(`review[rating]`, value);
    //     setRating(parseInt(value));
    // };

    // const handleReviewFormChange: React.ChangeEventHandler<
    //     HTMLTextAreaElement
    // > = (e) => {
    //     const { value } = e.target;
    //     formData.set(`review[body]`, value);
    //     setBody(value);
    // };

    // const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0];
    //     if (file) {
    //         formData.set("review[photo]", file);
    //         setPhoto(file);
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);
    //         fileReader.onload = () => setPhotoUrl(fileReader.result as string);
    //     } else setPhotoUrl("");
    // };

    // const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     if (currentUser && currentUser.id) {
    //         try {
    //             formData.set("review[author_id]", currentUser.id.toString());
    //             formData.set("review[business_id]", (+busId || "").toString());
    //             formData.set("review[rating]", rating?.toString() || "");
    //             formData.set("review[body]", body || "");
    //             if (photo) {
    //                 formData.set("review[photo]", photo);
    //             }

    //             for (let pair of formData.entries()) {
    //                 console.log(pair[0] + ", " + pair[1]);
    //             }
    //             dispatch(updateReview({ reviewId: review.id, formData }));
    //             dispatch(hideEditReviewModal());
    //         } catch (errors) {
    //             console.error("dispatch redirect did not work");
    //         }
    //     }
    // };
    let preview = null;
    if (photoUrl) preview = <img className="imgRR" src={photoUrl} alt="" />;

    return (
        <>
            <div
                id="combinedFormContainerRR"
                // onClick={(e) => e.stopPropagation()}
            >
                <form id="formRR" >
                    <h2 id="titleBigRR">Full Review</h2>
                    <div id="ratingContainerRR">
                        <RatingDisplayBusiness
                            
                            rating={rating || 0}
                        />
                    </div>
                    <div id="inputContainerRR">
                        {body}
                          
                    </div>
                    <div id="photoContainerRR">
                        {preview}
                        {/* <PhotoUpload
                            title="Change Photo"
                            handleChange={handleFile}
                        /> */}
                    </div>
                    {/* <div className="reviewButton">
                        <button
                            type="submit"
                            className="submitRE blueButton"
                        >
                            Submit Review
                        </button>
                    </div> */}
                </form>
            </div>
        </>
    );
};

export default ReviewRead;