import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from '../reducers/root';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => 
  createStore(
    rootReducer, 
    preloadedState, 
    composeWithDevTools(applyMiddleware(thunk, logger))
  )


export default configureStore;

