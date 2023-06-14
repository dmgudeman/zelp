import type { Business } from "../BusinessTypes";
import type { Review } from "../ReviewTypes";
import React from "react";

export interface IReviewFormProps {
    name: string;
    value: string | null;
    handleReviewFormChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export interface IReviewIndexProps {
    business: Business;
}

export interface IReviewNewProps {
    business: Business;
    handleCloseReviewNew: () => void;
}

export interface IReviewEditProps {
    review: Review;
    handleCloseReviewEdit: () => void;
}
export interface IReviewEditPayload {
    reviewId: number;
    formData: FormData;
}

export interface IRatingInputProps {
    className: string;
    name: string;
    value: number | null;
    rating: number | null;
    handleNewRatingChange: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
    handleEditRatingChange: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
}

export interface IPhotoUploadProps {
    title: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface IReviewDisplayCardProps {
    review: Review;
}
export interface IReviewSubmitProps {
    submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface IDisplayRatingProps {
    rating: number;
    starClass: string;
}
