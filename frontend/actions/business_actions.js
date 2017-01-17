import * as BusinessUtil from '../util/business_util';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

export const requestBusinesses = (tag, price, page) => dispatch => {
  // debugger
  return (
    BusinessUtil.fetchBusinesses(tag, price, page).then(data => dispatch(receiveBusinesses(data)))
  );
};

export const requestBusiness = (id) => dispatch => (
  BusinessUtil.fetchBusiness(id).then(data => dispatch(receiveBusiness(data)))
);

export const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

export const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
});
