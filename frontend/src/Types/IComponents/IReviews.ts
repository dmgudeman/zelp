import type { Business } from "../BusinessTypes";

export interface IReviewIndexProps {
    business: Business;
}

export interface IReviewNewProps {
    business: Business;
    handleCloseReviewNew: () => void;
}
