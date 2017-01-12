import { connect } from 'react-redux';
import BusinessDetail from './business_detail';
import { requestBusiness } from '../../actions/business_actions';

const mapStateToProps = state => {
  return ({
    business: state.businesses
  });
};

const mapDispatchToProps = dispatch => ({
  requestBusiness: (id) => dispatch(requestBusiness(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetail);
