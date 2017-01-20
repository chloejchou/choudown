import { logout } from '../../actions/session_actions';
import { requestBusinesses } from '../../actions/business_actions';
import { requestTags } from '../../actions/tag_actions';
import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => {
  let price;
  return ({
    logout: () => dispatch(logout()),
    requestBusinesses: (tag, page) => dispatch(requestBusinesses(tag, price, page)),
    requestTags: (name) => dispatch(requestTags(name))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
