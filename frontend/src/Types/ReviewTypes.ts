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


export interface IReviewNewProps {
    businessId: number;
}

