import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import appReducers from './modules/app';
import profileReducers from './modules/profile';

const reducers = combineReducers({
  app: appReducers,
  profile: profileReducers
});

export const initializeStore = preloadedState => {
  return createStore(reducers, preloadedState, composeWithDevTools(applyMiddleware()));
};
