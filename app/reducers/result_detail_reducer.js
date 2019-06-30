import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { CHANGE_LAYOUT, FILL_MOVIES, CHANGE_KEYWORD} from '../actions/action_types';

const resultDetailReducer = handleActions(
  {
    CHANGE_LAYOUT: (state, { payload }) => {
      let moviesToDisplay = state.get('moviesToDisplay');
      let newStyle;
      if ('Grid' == payload.option) {
        newStyle = 'grid_item';
      } else if ('List' == payload.option) {
        newStyle = 'list_item';
      }
      moviesToDisplay = moviesToDisplay.map(movie => movie.set('displayStyle', newStyle));
      return state.set('moviesToDisplay', moviesToDisplay)
                  .set('currentStyle', newStyle);
    },
    FILL_MOVIES: (state, { payload }) => {
      let movies = Immutable.fromJS(payload);
      let moviesToDisplay =  movies.map(movie => movie.set('displayStyle', state.get('currentStyle')));
      return state.set('movies', movies)
                  .set('moviesToDisplay', moviesToDisplay)
                  .set('keyWord', '');
    },
    CHANGE_KEYWORD: (state, { payload }) => {
      let keyWord = payload.keyWord;
      let movies = state.get('movies');
      let moviesToDisplay = movies.map(movie => movie.set('displayStyle', state.get('currentStyle')));
      if(!!keyWord){
        moviesToDisplay = moviesToDisplay.filter(movie => movie.get('name').toUpperCase().indexOf(keyWord.toUpperCase()) != -1);
      }
      return state.set('moviesToDisplay', moviesToDisplay);
    }
  },
  Immutable.fromJS({
    movies: [],
    moviesToDisplay: [],
    keyWord: '',
    currentStyle: 'grid_item'
  })
);

export default resultDetailReducer;