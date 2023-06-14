// import React from "react";
// import { useEffect, useState } from "react";
// import { useDispatch as _useDispatch, useSelector } from "react-redux";
// import { useParams, useHistory } from "react-router-dom";
// import ReviewForm from "../ReviewForm/ReviewForm";
// import RatingInput from "../RatingInput/RatingInput";
// import PhotoUpload from "../PhotoUpload/PhotoUpload";
// import {
//     deleteReview,
//     createReview,
//     getReview,
//     fetchReview,
// } from "../../../store/reviewsSlice";
// import { getCurrentUser } from "../../../store/sessionSlice";
// import { hideEditReviewModal } from "../../../store/uiSlice";
// import NavBar from "../../Navigation/NavBar/NavBar";
// import type { IReviewEditProps } from "../../../Types/IComponents/IReviews";
// import type { AppDispatch } from "../../../store/store";
// import "./ReviewEdit.css";

// const useDispatch = () => _useDispatch<AppDispatch>();

// const ReviewEdit: React.FC<IReviewEditProps> = ({
//     review,
//     handleCloseReviewEdit,
// }) => {
//     const dispatch = useDispatch();
//     // const { reviewId } = useParams();
//     // const review = useSelector(getReview(reviewId));
//     const history = useHistory();
//     const [busId, setBusId] = useState<number>(review.businessId);
//     const [rating, setRating] = useState<number | 0>(0);
//     const [body, setBody] = useState<string | "">(review.body);
//     const [photoUrl, setPhotoUrl] = useState<string | "">(review.photoUrl);
//     const [showPhoto, setShowPhoto] = useState(true);
//     const [photo, setPhoto] = useState<File | null>(null);
//     const sessionUser = useSelector(getCurrentUser);
//     const [formData, setFormData] = useState(new FormData());
//     const [userId, setUserId] = useState(
//         sessionUser?.user?.id || null || undefined
//     );

//     // console.log('ReviewEdit', reviewId)
//     // console.log('busId', busId);
//     // console.log('review', review);
//     // console.log('rating', rating);
//     // console.log('photoUrl', photoUrl)

//     // useEffect(() => {
//     //     console.log("UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU", review);
//     //     dispatch(fetchReview(review.id))
//     //         .then((review: Review) => {
//     //             console.log("inside", review);
//     //             setBusId(review.payload.businessId);
//     //             setRating(review.payload.rating);
//     //             setBody(review.payload.body);
//     //             setPhotoUrl(review.payload.photoUrl);
//     //         })
//     //         .catch((error:Error) => console.error(error));
//     // }, [review.id, dispatch]);

//     useEffect(() => {
//         setUserId(sessionUser?.user?.id);
//     }, [sessionUser?.user?.id]);

//     const handleRatingChange: React.ChangeEventHandler<HTMLInputElement> = (
//         e
//     ) => {
//         const { value } = e.target;
//         formData.set(`review[rating]`, value);
//         setFormData(formData);
//         setRating(parseInt(value));
//     };
//     const handleReviewFormChange: React.ChangeEventHandler<
//         HTMLTextAreaElement
//     > = (e) => {
//         const { value } = e.target;
//         formData.set(`review[body]`, value);
//         setFormData(formData);
//         setBody(value);
//     };

//     const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (file) {
//             formData.append("review[photo]", file);
//             setPhoto(file);
//             setFormData(formData);

//             const fileReader = new FileReader();
//             fileReader.readAsDataURL(file);
//             fileReader.onload = () => setPhotoUrl(fileReader.result as string);
//         } else setPhotoUrl("");
//     };

//     // creates a new review
//     const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         e.stopPropagation();

//         console.log("Session User", sessionUser);

//         console.log(sessionUser);
//         console.log("sessionUser.id", sessionUser?.user?.id);
//         console.log("busId", busId);
//         console.log("rating", rating);
//         console.log("body", body);
//         console.log("photoUrl", photoUrl);
//         try {
//             if (sessionUser) {
//                 formData.set(
//                     "review[author_id]",
//                     (sessionUser?.user?.id || "").toString()
//                 );
//                 formData.set("review[business_id]", (+busId || "").toString());
//                 formData.set("review[rating]", (+rating).toString());
//                 formData.set("review[body]", body);
//             }

//             // await dispatch(deleteReview(review.id));
//             await dispatch(createReview(formData));
//             // setFormData(null);
//             setBody("");
//             setRating(0);
//             dispatch(hideEditReviewModal());
//             history.push(`/businesses/${busId}`);
//         } catch (errors) {
//             console.error("dispatch redirect did not work");
//         }
//     };

//     // const submitHandler = (e) => {
//     //     e.preventDefault();
//     //     e.stopPropagation();
//     //     dispatch(deleteReview(reviewId));
//     //     console.log("Session User", sessionUser);
//     //     formData.set("review[author_id]", +sessionUser.id);
//     //     formData.set("review[business_id]", +busId);
//     //     formData.set("review[rating]", +rating);
//     //     formData.set("review[body]", body);
//     //     formData.set("review[photoUrl]", photoUrl);
//     //     //     console.log(`${key}: ${value}`);
//     //     try {
//     //         dispatch(createReview(formData));
//     //         setFormData(null);
//     //         setBody(null);
//     //         setRating(null);
//     //         handleClose();
//     //         history.push(`/businesses/${busId}`);
//     //     } catch (errors) {
//     //         console.error("dispatch redirect did not work");
//     //     }
//     // };

//     let preview = null;
//     if (photoUrl) preview = <img className="imgRN" src={photoUrl} alt="" />;
//     return (
//         <>
//             <NavBar showFlag={"none"} />
//             <div
//                 id="combinedFormContainerRE"
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 <form id="formRE" onSubmit={submitHandler}>
//                     <h2 id="titleBigRE">Edit Your Review</h2>
//                     <div id="ratingContainerRE">
//                         <RatingInput
//                             className="ratingReview"
//                             name="rating"
//                             value={rating}
//                             rating={rating}
//                             handleRatingChange={handleRatingChange}
//                         />
//                     </div>
//                     <div id="inputContainerRE">
//                         <ReviewForm
//                             name="body"
//                             value={body}
//                             handleReviewFormChange={handleReviewFormChange}
//                         />
//                     </div>
//                     <div id="photoContainerRE">
//                         {preview}
//                         <PhotoUpload
//                             // name="photo"
//                             // photoUrl={photoUrl}
//                             // setPhotoUrl={setPhotoUrl}
//                             title="Change Photo"
//                             handleChange={handleFile}
//                         />
//                     </div>
//                     <div className="reviewButton">
//                         <button
//                             type="submit"
//                             className="newReviewSubmit blueButton"
//                         >
//                             Submit Review
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// };

// export default ReviewEdit;
