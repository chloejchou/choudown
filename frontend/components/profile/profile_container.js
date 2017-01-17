import { connect } from 'react-redux';
import Profile from './profile';
import { requestFeaturedBusiness } from '../../actions/business_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  featuredBusiness: state.businesses
});

const mapDispatchToProps = dispatch => ({
  requestFeaturedBusiness: (id) => dispatch(requestFeaturedBusiness(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
