import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

import login from './reducers/LoginReducer';
import error from './reducers/ErrorReducer';

const enhancer = compose(
  applyMiddleware(thunk),
  //devTools({hostname: 'localhost', port: 8001,})
)

export default (data = {}) => {
  const rootReducer = combineReducers({login, error})
  return createStore(rootReducer, data, enhancer);
}
