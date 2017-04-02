import React from 'react';
import { Provider } from 'react-redux';

// components
import AppRouter from './app/router';

const Root = ({ store }) => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};

export default Root;
