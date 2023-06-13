import { configureStore, Middleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
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
  ui: uiReducer
}

// let middleware: Middleware[] = [];

// if (process.env.NODE_ENV !== 'production') {
//   middleware = [...middleware, logger];
// }

export const store = configureStore({
  reducer,
  // middleware,
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;