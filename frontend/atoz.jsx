import React from 'react';
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
  }
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});