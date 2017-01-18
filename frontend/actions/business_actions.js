import * as BusinessUtil from '../util/business_util';
import * as BookmarkUtil from '../util/bookmark_util';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

export const requestBusinesses = (tag, price, page) => dispatch => (
  BusinessUtil.fetchBusinesses(tag, price, page).then(data => dispatch(receiveBusinesses(data)))
);

export const requestBusiness = (id) => dispatch => (
  BusinessUtil.fetchBusiness(id).then(data => dispatch(receiveBusiness(data)))
);

export const requestFeaturedBusiness = (id) => dispatch => (
  BusinessUtil.fetchFeaturedBusiness(id).then(data => dispatch(receiveBusiness(data)))
);

export const requestBookmarks = (userId) => dispatch => (
  BookmarkUtil.fetchBookmarks(userId).then(data => dispatch(receiveBusinesses(data)))
);

export const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

export const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
});
