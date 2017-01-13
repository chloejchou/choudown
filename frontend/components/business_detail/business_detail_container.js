import { connect } from 'react-redux';
import BusinessDetail from './business_detail';
import { requestBusiness } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    business: state.businesses[ownProps.params.businessId]
  });
};

const mapDispatchToProps = dispatch => ({
  requestBusiness: (id) => dispatch(requestBusiness(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetail);
