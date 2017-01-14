import * as ReviewUtil from '../util/review_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "CREATE_REVIEW";
export const RECIEVE_ERRORS = "RECIEVE_ERRORS";

export const requestReviews = (businessId) => dispatch => (
  ReviewUtil.fetchReviews(businessId).then(data => dispatch(receiveReviews(data)))
);

export const createReview = (businessId, review) => dispatch => (
  ReviewUtil.createReview(businessId, review).then(data => dispatch(receiveReview(data)))
);

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveErrors = (errors) => ({
  type: RECIEVE_ERRORS,
  errors
});
