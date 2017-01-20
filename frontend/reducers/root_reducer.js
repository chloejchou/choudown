import sessionReducer from './session_reducer';
import businessReducer from './business_reducer';
import reviewReducer from './review_reducer';
import errorReducer from './error_reducer';
import tagReducer from './tag_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: sessionReducer,
  businesses: businessReducer,
  reviews: reviewReducer,
  errors: errorReducer,
  tags: tagReducer
});

export default rootReducer;
