import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from '../actions/business_actions';
import merge from 'lodash/merge';

const businessReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      newState = merge({}, oldState);
      newState[action.business.id] = action.business;
      return newState;
    default:
      return oldState;
  }
};

export default businessReducer;
