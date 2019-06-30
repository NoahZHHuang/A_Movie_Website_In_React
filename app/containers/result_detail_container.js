import { connect } from 'react-redux';
import Immutable from 'immutable';
import ResultDetail from '../components/result_detail';
import categoryData from '../data/category_data';
import {
  FILL_MOVIES_ACTION, FILL_CATEGORIES_ACTION
} from '../actions/actions.js';

export default connect(
  (state) => (
    {moviesToDisplay:  state.getIn(['resultDetailReducer', 'moviesToDisplay'])}
  ),
  (dispatch) => ({
    getMovies: () => {
      fetch('/app/movies', {
        method: 'GET'
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json()
        })
        .then((result) => {
          dispatch(FILL_MOVIES_ACTION(result.movies));
        })
        .catch((error) => { throw new Error(error.message) });
    },
    updateCategories: (moviesToDisplay)=>{
      let categories = Immutable.fromJS(categoryData.categories).toJS();
      for (let moive of moviesToDisplay.toJS()) {
        for (let category of categories) {
          if (moive.type.toLowerCase() == category.name.toLowerCase()) {
            category.count = category.count + 1;
            let subCategories = category.subCategories;
            for (let subCategory of subCategories) {
              if(moive.tags.includes(subCategory.name.toLowerCase())){
                subCategory.count = subCategory.count + 1 ;
              }
            }
          }
        }
      }
      dispatch(FILL_CATEGORIES_ACTION(categories));
    }
  })
)(ResultDetail);
