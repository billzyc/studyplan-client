import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import appReducers from './modules/app';
import profileReducers from './modules/profile';
import semesterReducer from './modules/semester';
import courseReducer from './modules/course';

const reducers = combineReducers({
  app: appReducers,
  profile: profileReducers,
  semesterInfo: semesterReducer,
  courseInfo: courseReducer
});

export const initializeStore = preloadedState => {
  return createStore(reducers, preloadedState, composeWithDevTools(applyMiddleware()));
};
