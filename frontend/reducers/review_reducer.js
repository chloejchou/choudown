import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const reviewReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      const newState = merge({}, oldState);
      newState.unshift(action.review);
      return newState;
    default:
      return oldState;
  }
};

export default reviewReducer;
