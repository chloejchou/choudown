import * as ReviewUtil from '../util/review_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "CREATE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";

export const requestReviews = (businessId) => dispatch => (
  ReviewUtil.fetchReviews(businessId).then(data => dispatch(receiveReviews(data)))
);

export const createReview = (businessId, review) => dispatch => (
  ReviewUtil.createReview(businessId, review).then(data => dispatch(receiveReview(data)), err => dispatch(receiveReviewErrors(err.responseJSON)))
);

export const requestPersonalReviews = (userId) => dispatch => (
  ReviewUtil.fetchPersonalReviews(userId).then(data => dispatch(receiveReviews(data)))
);

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS
});
