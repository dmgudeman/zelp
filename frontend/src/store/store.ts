import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import sessionReducer from './sessionSlice';
import businessesReducer from './businessesSlice';
import reviewsReducer from './reviewsSlice';
import tagsReducer from './tagsSlice';
import uiReducer from './uiSlice';

const reducer = {
  session: sessionReducer,
  businesses: businessesReducer,
  reviews: reviewsReducer,
  tags: tagsReducer,
  ui: uiReducer,
}

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV !== 'production') {
      return getDefaultMiddleware().concat(logger);
    } else {
      return getDefaultMiddleware();
    }
  },
  devTools: process.env.NODE_ENV !== 'production',
});



export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

