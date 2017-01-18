import { connect } from 'react-redux';
import ProfileBookmarks from './profile_bookmarks';
import { requestBookmarks } from '../../actions/business_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  businesses: state.businesses
});

const mapDispatchToProps = (dispatch) => ({
  requestBookmarks: (userId) => dispatch(requestBookmarks(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBookmarks);
