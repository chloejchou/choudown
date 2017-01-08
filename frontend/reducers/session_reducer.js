import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };
    case RECEIVE_ERRORS:
      const errors = {errors: action.errors};
      return merge({}, oldState, errors);
    default:
      return oldState;
  }
};

export default sessionReducer;
