import {createAction} from 'redux-actions'; 
import {
  FILL_CATEGORIES,
  FILL_MOVIES,
  CHANGE_KEYWORD, 
  CHANGE_LAYOUT
} from './action_types';

export const FILL_CATEGORIES_ACTION = createAction(FILL_CATEGORIES);
export const FILL_MOVIES_ACTION = createAction(FILL_MOVIES);
export const CHANGE_KEYWORD_ACTION = createAction(CHANGE_KEYWORD);
export const CHANGE_LAYOUT_ACTION = createAction(CHANGE_LAYOUT);
