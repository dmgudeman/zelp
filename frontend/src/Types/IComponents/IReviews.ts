import type { Business } from "../BusinessTypes";

export interface IReviewIndexProps {
    business: Business;
}

export interface IReviewNewProps {
    businessId: number;
    handleCloseReviewNew: () => void;
}
