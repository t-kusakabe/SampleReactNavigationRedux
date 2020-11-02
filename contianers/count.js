import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CountComponent from '../components/count';
import * as countReducer from '../modules/count';

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(countReducer, dispatch)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountComponent);
