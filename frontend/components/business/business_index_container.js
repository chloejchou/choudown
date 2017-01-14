import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { requestBusinesses, requestBusiness } from '../../actions/business_actions';

const mapStateToProps = state => {
  return ({
    businesses: state.businesses
  });
};

const mapDispatchToProps = dispatch => ({
  requestBusinesses: (tag, price) => dispatch(requestBusinesses(tag, price)),
  requestBusiness: (id) => dispatch(requestBusiness(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
