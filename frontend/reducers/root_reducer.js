import sessionReducer from './session_reducer';
import businessReducer from './business_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: sessionReducer,
  businesses: businessReducer
});

export default rootReducer;
