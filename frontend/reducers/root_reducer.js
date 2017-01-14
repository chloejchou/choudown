import sessionReducer from './session_reducer';
import businessReducer from './business_reducer';
import reviewReducer from './review_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: sessionReducer,
  businesses: businessReducer,
  reviews: reviewReducer
});

export default rootReducer;
