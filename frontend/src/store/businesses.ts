import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import {Business} from '../Types/Business'

import csrfFetch from './csrf';
import { receiveReviews } from './reviews';

const initialState: Record<string, any> = {};


const businessesSlice = createSlice({
    name: 'businesses',
    initialState,
    reducers: {
      receiveBusinesses: (state, action: PayloadAction<Record<string, any>>) => {
        return { ...action.payload };
      },
      receiveBusiness: (state, action: PayloadAction<any>) => {
        state[action.payload.id] = action.payload;
      },
    },
  });
  
  export const { receiveBusinesses, receiveBusiness } = businessesSlice.actions;

  export const getBusinessById = createSelector(
    (state) => state.businesses,
    (_, busId:number) => busId,
    (businesses:Business[], busId) => businesses[busId]
  );

  export const fetchBusinesses = createAsyncThunk(
    'businesses/fetchBusinesses',
    async (_, { dispatch }) => {
      const res = await csrfFetch("/api/businesses");
      const data = await res.json();
      dispatch(receiveBusinesses(data));
      return res;
    }
  );
  
  export const fetchBusinessesWithTag = createAsyncThunk(
    'businesses/fetchBusinessesWithTag',
    async (tag, { dispatch }) => {
      const res = await csrfFetch(`/api/businesses?tag=${tag}`);
      const data = await res.json();
      dispatch(receiveBusinesses(data));
      return res;
    }
  );
  
  export const fetchBusinessesSearch = createAsyncThunk(
    'businesses/fetchBusinessesSearch',
    async ({ tag, bus, add }, { dispatch }) => {
      try {
        const res = await csrfFetch(
          `/api/businesses?tag=${tag}&bus=${bus}&add=${add}`
        );
        const data = await res.json();
        dispatch(receiveBusinesses(data));
        return res;
      } catch (error) {
        console.error("Error fetching businesses: ", error);
      }
    }
  );
  
  export const fetchBusiness = createAsyncThunk(
    'businesses/fetchBusiness',
    async (businessId, { dispatch }) => {
      const res = await csrfFetch(`/api/businesses/${businessId}`);
      const data = await res.json();
  
      if (res.ok) {
        if (data.reviews) {
          dispatch(receiveReviews(data.reviews))
        }
        dispatch(receiveBusiness(data));
        return res;
      } else {
        console.error("fetchBusiness did not work, in reducer");
      }
    }
  );
  
const businessesReducer = businessesSlice.reducer;
export default businessesReducer;

