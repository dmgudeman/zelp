import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import csrfFetch from "./csrf";
// import { receiveReviews } from './reviewsSlice';
import type { Business } from "../Types/BusinessTypes";
import type { Review } from "../Types/ReviewTypes";
import type {RootState } from './store';

// Define async thunks
export const fetchBusinesses = createAsyncThunk<Record<string, Business>>(
    "businesses/fetchBusinesses",
    async () => {
        const res = await csrfFetch("/api/businesses");
        const data = (await res.json()) as Record<string, Business>;
        return data;
    }
);

export const fetchBusiness = createAsyncThunk<Business, string>(
    "businesses/fetchBusiness",
    async (businessId, { dispatch }) => {
        const res = await csrfFetch(`/api/businesses/${businessId}`);
        const data = (await res.json()) as Business;

        if (res.ok) {
            if (data.reviews) {
                // dispatch(receiveReviews(data.reviews as Review[]))  // uncomment this when reviewSlice done
            }
            return data;
        } else {
            throw new Error("fetchBusiness did not work, in reducer");
        }
    }
);

export const fetchBusinessesSearch = createAsyncThunk<
    Record<string, Business>,
    { tag: string; bus: string; add: string }
>("businesses/fetchBusinessesSearch", async ({ tag, bus, add }) => {
    try {
        const res = await csrfFetch(
            `/api/businesses?tag=${tag}&bus=${bus}&add=${add}`
        );
        const data = (await res.json()) as Record<string, Business>;
        return data;
    } catch (error) {
        throw new Error(`Error fetching businesses: ${error}`);
    }
});

// FULFILLED TYPE IS FIRST, THE ARGUMENT IS SECOND
// Record<string, Buisness> is a Generic type for the FULFILLED value of the thunk, an object of keys are strings and values businesses
// in <Record<....>, string> the string is the type of argument PASSED to the async thunk, in this case a single string
export const fetchBusinessesWithTag = createAsyncThunk<
    Record<string, Business>,
    string
>("businesses/fetchBusinessesWithTag", async (tag) => {
    try {
        const res = await csrfFetch(`/api/businesses?tag=${tag}`);
        const data = (await res.json()) as Record<string, Business>;
        return data;
    } catch (error) {
        throw new Error(`Error fetching businesses: ${error}`);
    }
});

export const updateBusinessRating = createAsyncThunk<void, number>(
    "businesses/updateBusinessRating",
    async (busId, { getState }) => {
        const state = getState() as RootState;
        const reviews: Review[] = Object.values(state.reviews).filter((review: any) => review.businessId === busId);
        
        if (reviews.length === 0) {
            console.error("No reviews found for business with id:", busId);
            return;
        }

        const avgRating = reviews.reduce((sum, review) => sum + (review.rating || 0), 0) / reviews.length;
        console.log('Average Rating:', avgRating);

        if (isNaN(avgRating)) {
            console.error("Average rating calculation resulted in NaN");
            return;
        }
        const res = await csrfFetch(`/api/businesses/${busId}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ business: { rating: avgRating }}),
        });
            const updatedBusiness = await res.json();
        if (res.ok) {
            updateBusinessRatingState({busId, avgRating:  updatedBusiness.rating})
        } else {
            console.error("Error updating business rating");
        }
    }
);
export const getAverageRatingForBusiness = (busId: number) => {
    return (state: RootState) => {
      const reviews: Review[] = Object.values(state.reviews).filter((review: any) => review.businessId === busId);
      if (reviews.length === 0) return 0;
      const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
      return avgRating;
    }
  };
  


// Create the slice
const businessesSlice = createSlice({
    name: "businesses",
    initialState: {} as Record<string, Business>,
    reducers: {
        updateBusinessRatingState: (state, action: PayloadAction<{ busId: number, avgRating: number }>) => {
            const { busId, avgRating } = action.payload;
            const business = state[busId];
            if (business) {
              business.rating = avgRating;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBusinesses.fulfilled, (state, action) => {
                return { ...action.payload };
            })
            .addCase(
                fetchBusiness.fulfilled,
                (state, action: PayloadAction<Business>) => {
                    state[action.payload.id] = action.payload;
                }
            )
            .addCase(fetchBusinessesSearch.fulfilled, (state, action) => {
                return { ...action.payload };
            })
            .addCase(fetchBusinessesWithTag.fulfilled, (state, action) => {
                return { ...action.payload };
            });
    },
});
export const { updateBusinessRatingState } = businessesSlice.actions;

export const getBusinesses = (state: {
    businesses: Record<string, Business>;
}) => {
    return state.businesses ? Object.values(state.businesses) : [];
};

export const getBusiness =
    (businessId: number) =>
    (state: { businesses: Record<string, Business> }) => {
        return state.businesses ? state.businesses[businessId] : undefined;
    };

export default businessesSlice.reducer;
