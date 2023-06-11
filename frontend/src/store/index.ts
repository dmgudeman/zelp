import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import businessesReducer from './businesses';
import reviewsReducer from './reviews';
import tagsReducer from './tags';
import uiReducer from './ui';

const rootReducer = combineReducers({
  session: sessionReducer,
  businesses: businessesReducer,
  reviews: reviewsReducer,
  tags: tagsReducer,
  ui: uiReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

