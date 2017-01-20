import { connect } from 'react-redux';
import Tag from './tag';

const mapStateToProps = state => ({
  tags: state.tags
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Tag);
