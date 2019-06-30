import {handleActions} from 'redux-actions';
import Immutable from 'immutable';
import layoutOptionData from '../data/layout_option_data';
import {CHANGE_LAYOUT} from '../actions/action_types';

const layoutOptionReducer = handleActions(
  {
    CHANGE_LAYOUT: (state, {payload}) => {
      let options = state.get('options');
      let newOptions = options.map(option=>{
        if(option.get('name')==payload.option){
          return option.set('isSelected', 'selected');
        }else{
          return option.set('isSelected', '');
        }
      });
      return state.set('options', newOptions);
    }
  },
  Immutable.fromJS({
    options:layoutOptionData.options
  })
);

export default layoutOptionReducer;