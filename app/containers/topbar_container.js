import {connect} from 'react-redux';
import Topbar from '../components/topbar';
import reactLogo from '../assets/icons/react_logo.jpg';
import {
  CHANGE_KEYWORD_ACTION,
} from '../actions/actions.js';

let keyWord;

export default connect(
  (state) => {
    keyWord = state.getIn(['topbarReducer','keyWord']);
    return {
      'keyWord': keyWord,
      'reactLogo': reactLogo
    }
  },
  (dispatch) => ({
      onChange: (event) =>{
        dispatch(CHANGE_KEYWORD_ACTION({
          'keyWord': event.target.value
        }));
      }
  })
)(Topbar);