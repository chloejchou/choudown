import { connect } from 'react-redux';
import BusinessDetail from './business_detail';
import { requestBusiness } from '../../actions/business_actions';
import { requestReviews } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    business: state.businesses[ownProps.params.businessId],
    reviews: state.reviews
  });
};

const mapDispatchToProps = dispatch => ({
  requestBusiness: (id) => dispatch(requestBusiness(id)),
  requestReviews: (businessId) => dispatch(requestReviews(businessId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetail);
