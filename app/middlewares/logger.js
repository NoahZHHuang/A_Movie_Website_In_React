export const logger = store => next => action => {
  //console.log('---------------------------------------');
  //console.log('old state: {}', JSON.stringify(store.getState().get('categoryReducer')));
  //console.log('dispatch action: {}', JSON.stringify(action));
	next(action);
	//console.log('new state: {}', JSON.stringify(store.getState().get('categoryReducer')));
};
