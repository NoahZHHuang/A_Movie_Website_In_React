import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';
import {Provider} from 'react-redux';
import Store from './store/store';

ReactDOM.render(
    <Provider store={Store}>
      <Main/>
    </Provider>,
    document.getElementById('app')
);