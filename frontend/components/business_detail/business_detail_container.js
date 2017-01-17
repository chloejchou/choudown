import { connect } from 'react-redux';
import BusinessDetail from './business_detail';
import { requestBusiness } from '../../actions/business_actions';
import { requestReviews, createReview, clearReviewErrors } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    business: state.businesses[ownProps.params.businessId],
    reviews: state.reviews,
    errors: state.errors
  });
};

const mapDispatchToProps = dispatch => ({
  requestBusiness: (id) => dispatch(requestBusiness(id)),
  requestReviews: (businessId) => dispatch(requestReviews(businessId)),
  createReview: (businessId, review) => dispatch(createReview(businessId, review)),
  clearReviewErrors: () => dispatch(clearReviewErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetail);
