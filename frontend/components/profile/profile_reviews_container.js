import { connect } from 'react-redux';
import ProfileReviews from './profile_reviews';
import { requestPersonalReviews } from '../../actions/review_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  reviews: state.reviews
});

const mapDispatchToProps = (dispatch) => ({
  requestPersonalReviews: (userId) => dispatch(requestPersonalReviews(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileReviews);
