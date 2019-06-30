import {handleActions} from 'redux-actions';
import Immutable from 'immutable';
import {CHANGE_KEYWORD, SEARCH_KEYWORD} from '../actions/action_types';

const topbarReducer = handleActions(
  {
    CHANGE_KEYWORD: (state, {payload}) => {
      let newKeyWord = payload.keyWord;
      return state.set('keyWord', newKeyWord);
    }
  },
  Immutable.fromJS({
    keyWord:''
  })
);

export default topbarReducer;