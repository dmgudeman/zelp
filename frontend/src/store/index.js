import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import businessesReducer from './businesses';
import reviewsReducer from './reviews';
import tagsReducer from './tags';
import uiReducer from './ui/ui';


export const rootReducer = combineReducers({
  session: sessionReducer,
  businesses: businessesReducer,
  reviews: reviewsReducer,
  tags: tagsReducer,
  ui: uiReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };

export default configureStore;