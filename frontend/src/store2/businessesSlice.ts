import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import csrfFetch from './csrf';
import { receiveReviews } from './reviewsSlice';

import {Business, Review } from '../Types';



// Define async thunks
export const fetchBusinesses = createAsyncThunk<Record<string, Business>>(
  'businesses/fetchBusinesses',
  async () => {
    const res = await csrfFetch('/api/businesses');
    const data = await res.json() as Record<string, Business>;
    return data;
  }
);

export const fetchBusiness = createAsyncThunk<Business, string>(
  'businesses/fetchBusiness',
  async (businessId) => {
    const res = await csrfFetch(`/api/businesses/${businessId}`);
    const data = await res.json() as Business;

    if (res.ok) {
      if (data.reviews) {
        dispatch(receiveReviews(data.reviews as Review[]))
      }
      return data;
    } else {
      throw new Error("fetchBusiness did not work, in reducer");
    }
  }
);

// Create the slice
const businessesSlice = createSlice({
  name: 'businesses',
  initialState: {} as Record<string, Business>,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusinesses.fulfilled, (state, action) => {
        return { ...action.payload };
      })
      .addCase(fetchBusiness.fulfilled, (state, action: PayloadAction<Business>) => {
        state[action.payload.id] = action.payload;
      });
  }
});

export const getBusinesses = (state: { businesses: Record<string, Business> }) => {
  return state.businesses ? Object.values(state.businesses) : [];
};

export const getBusiness = (businessId: string) => (state: { businesses: Record<string, Business> }) => {
  return state.businesses ? state.businesses[businessId] : undefined;
};

export default businessesSlice.reducer;

