import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { requestBusinesses, requestBusiness } from '../../actions/business_actions';

const mapStateToProps = state => ({
  businesses: state.businesses
});

const mapDispatchToProps = dispatch => ({
  requestBusinesses: () => dispatch(requestBusinesses()),
  requestBusiness: (id) => dispatch(requestBusiness(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
