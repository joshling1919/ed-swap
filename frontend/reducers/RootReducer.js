import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import SessionReducer from './SessionReducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  routing: routerReducer,
});

export default RootReducer;
