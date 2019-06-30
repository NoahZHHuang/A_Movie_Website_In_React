import {combineReducers} from 'redux-immutable';
import topbarReducer from './topbar_reducer';
import categoryReducer from './category_reducer';
import layoutOptionReducer from './layout_option_reducer';
import resultDetailReducer from './result_detail_reducer';

const rootReducer = combineReducers({
  topbarReducer,
  categoryReducer,
  layoutOptionReducer,
  resultDetailReducer
});

export default rootReducer;