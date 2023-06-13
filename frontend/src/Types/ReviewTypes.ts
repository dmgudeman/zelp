import type { Business } from './BusinessTypes';

export interface IReviewNewProps {
    business: Business;
    handleCloseReviewNew: () => void;
}
export interface Review {
    id: number;
    authorId: number;
    authorName?: string;
    body: string;
    businessId: number;
    photoUrl: string | null;
    rating: number;
    createdAt: string | null;
    updatedAt: string | null;
}





export interface IReviewEditProps {
    review: Review;
}

