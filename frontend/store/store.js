import { applyMiddleware, createStore, compose } from 'redux';
import RootReducer from '../reducers/RootReducer';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(browserHistory))),
  )
);

export default configureStore;
