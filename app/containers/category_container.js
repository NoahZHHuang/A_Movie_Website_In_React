import {connect} from 'react-redux';
import Category from '../components/category';
import {
  FILL_CATEGORIES_ACTION
} from '../actions/actions.js';

export default connect(
  (state) => ({
    categories: state.getIn(['categoryReducer','categories'])
  }),
  (dispatch) => ({
    
  })
)(Category);