import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import {FILL_CATEGORIES} from '../actions/action_types';

const categoryReducer = handleActions(
  {
    FILL_CATEGORIES: (state, {payload})=>{
      return state.set('categories', Immutable.fromJS(payload));
    }
  },
  Immutable.fromJS({
    categories: []
  })
);

export default categoryReducer;