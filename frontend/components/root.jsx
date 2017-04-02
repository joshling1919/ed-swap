import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

// components
import App from './app/App';
import NoMatch from './app/NoMatch';

const Root = ({ store }) => {
  const history= syncHistoryWithStore(browserHistory, store);

	return (
		<Provider store={store}>
			<Router history={history}>
        <Route path="/" component={ App }>
        </Route>
      <Route path="*" component={NoMatch}/>
			</Router>
		</Provider>
	);
};

export default Root;
