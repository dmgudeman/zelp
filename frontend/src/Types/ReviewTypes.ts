

// this is for the store if it is in a component
// check IReviews in IComponents


export interface Review {
    id: number;
    authorId: number;
    authorName?: string;
    businessId: number;
    rating: number;
    body: string;
    photoUrl: string | "";
    createdAt: string | null;
    updatedAt: string | null;
}






