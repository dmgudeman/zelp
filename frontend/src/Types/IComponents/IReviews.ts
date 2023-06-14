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

export interface IRatingInputProps {
    className: string;
    name: string;
    value: number | null;
    rating: number | null;
    handleRatingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IReviewDisplayCardProps {
    review: Review;
}
export interface IReviewSubmitProps {
    submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}
