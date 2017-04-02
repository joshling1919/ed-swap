import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// components
import App from './app';

const AppRouter = ({ store }) => {
  const history= syncHistoryWithStore(browserHistory, store);
  
  return(
    <Router history={history}>
      <Route path="/" component={ App }>
        // Routes go here
      </Route>
    </Router>
  );
}

export default AppRouter;
