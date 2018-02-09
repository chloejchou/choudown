import { connect } from 'react-redux';

import { requestBusinesses } from '../../actions/business_actions';
import { requestTags } from '../../actions/tag_actions';
import Home from './home';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => {
  let price;
  return {
    requestBusinesses: (tag, page) => dispatch(requestBusinesses(tag, price, page)),
    requestTags: name => dispatch(requestTags(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
