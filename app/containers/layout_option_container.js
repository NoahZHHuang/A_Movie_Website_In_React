import {connect} from 'react-redux';
import LayoutOption from '../components/layout_option';
import {
  CHANGE_LAYOUT_ACTION
} from '../actions/actions.js';

export default connect(
  (state) => ({
    options: state.getIn(['layoutOptionReducer','options'])
  }),
  (dispatch) => ({
    onClick: (option) =>{
      dispatch(CHANGE_LAYOUT_ACTION({
        'option':option
      }));
    }
  })
)(LayoutOption);