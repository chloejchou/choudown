import { logout } from '../../actions/session_actions';
import { requestBusinesses } from '../../actions/business_actions';
import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestBusinesses: (tag) => dispatch(requestBusinesses(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
