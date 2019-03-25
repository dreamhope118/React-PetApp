import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import appForms from './forms';

const store = createStore(combineReducers({
  lol: () => ({ my: 'init' }),
  appForms,
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;
