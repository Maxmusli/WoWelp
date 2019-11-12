import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // window.getState = store.getState;
  
  let store;
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id },
      filters: {}
    };
    delete window.currentUser;
  } 
  if (window.near || window.match) {
    
    preloadedState.filters.near = window.near
    preloadedState.filters.find = window.match
    delete window.near
    delete window.match
  }

  store = configureStore(preloadedState);
  window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, root)
})