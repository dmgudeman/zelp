import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
    createSelector,
} from "@reduxjs/toolkit";
import csrfFetch from "./csrf";
import { Review } from "../Types/ReviewTypes";
import { RootState } from "./store";

export const getReview =
    (reviewId: string) =>
    (state: RootState): Review | undefined => {
        return state.reviews[reviewId];
    };

export const getReviews = createSelector(
    (state: RootState) => state.reviews,
    (reviews) => Object.values(reviews)
);

export const fetchReview = createAsyncThunk<Review, string>(
    "reviews/fetchReview",
    async (reviewId) => {
        const res = await csrfFetch(`/api/reviews/${reviewId}`);
        const data = await res.json();
        if (res.ok) {
            return data;
        } else {
            console.error("error in fetching review");
            throw new Error("Failed to fetch review");
        }
    }
);

export const fetchReviews = createAsyncThunk<Review[]>(
    "reviews/fetchReviews",
    async () => {
        const res = await csrfFetch("/api/reviews");
        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            console.error("fetchReviews failed");
            throw new Error("Failed to fetch reviews");
        }
    }
);

export const fetchReviewsByBusiness = createAsyncThunk(
    "reviews/fetchReviewsByBusiness",
    async (busId: number, { dispatch }) => {
        const res = await csrfFetch(`/api/businesses/${busId}`);
        const data = await res.json();
        console.log("fetchReviewsByBusiness", data);
        if (res.ok) {
            dispatch(receiveReviews(data.reviews));
            return data.review;
        } else {
            throw new Error("Error in fetching reviews");
        }
    }
);

export const createReview = createAsyncThunk<Review, FormData>(
    "reviews/createReview",
    async (review, { dispatch }) => {
        const res = await csrfFetch("/api/reviews", {
            method: "POST",
            body: review,
        });
        const data = await res.json();
        dispatch(receiveReview(data));
        return data;
    }
);

export const editReview = createAsyncThunk<
    Review,
    { review: Review; reviewId: string }
>("reviews/editReview", async ({ review, reviewId }, { dispatch }) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "PATCH",
        body: JSON.stringify(review),
    });
    const data = await res.json();
    dispatch(receiveReview(data));
    return data;
});

export const deleteReview = createAsyncThunk<void, number>(
    "reviews/deleteReview",
    async (reviewId, { dispatch }) => {
        const res = await csrfFetch(`/api/reviews/${reviewId}`, {
            method: "DELETE",
        });

        if (res.ok) {
            dispatch(removeReview(reviewId));
        } else {
            console.error("Error in deleting review");
        }
    }
);

const reviewsSlice = createSlice({
    name: "reviews",
    initialState: {} as Record<string, Review>,
    reducers: {
        receiveReviews: (state, action: PayloadAction<Review[]>) => {
            action.payload.forEach((review) => {
                state[review.id] = review;
            });
        },
        receiveReview: (state, action: PayloadAction<Review>) => {
            state[action.payload.id] = action.payload;
        },
        removeReview: (state, action: PayloadAction<number>) => {
            delete state[action.payload];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReview.fulfilled, (state, action) => {
                console.log("ACTIONPAYLOD", action.payload);
                state[action.payload.id] = action.payload;
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                action.payload.forEach((review) => {
                    state[review.id] = review;
                });
            })
            .addCase(editReview.fulfilled, (state, action) => {
                // Handle the editReview fulfilled state
                // consider closing modal
            })
            .addCase(createReview.fulfilled, (state, action) => {
                // modal?
            });
        builder.addCase(fetchReviewsByBusiness.rejected, (state, action) => {
            console.error("Error in fetching reviews:", action.error.message);
        });
        builder.addCase(deleteReview.rejected, (state, action) => {
                console.error("Error in deleting review:", action.error.message);
            });
    },
});

export const { receiveReviews, receiveReview, removeReview } =
    reviewsSlice.actions;
export default reviewsSlice.reducer;
