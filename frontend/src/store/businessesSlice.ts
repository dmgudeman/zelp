import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import csrfFetch from "./csrf";
// import { receiveReviews } from './reviewsSlice';
import { Business } from "../Types/BusinessTypes";
import { Review } from "../Types/ReviewTypes";

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

// Create the slice
const businessesSlice = createSlice({
    name: "businesses",
    initialState: {} as Record<string, Business>,
    reducers: {},
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
