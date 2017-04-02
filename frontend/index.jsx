import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import configureStore from './store/Store';
import injectTapEventPlugin from 'react-tap-event-plugin';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  injectTapEventPlugin();
  ReactDOM.render(<Root store={store} />, root);
});
