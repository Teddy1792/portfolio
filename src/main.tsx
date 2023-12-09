import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './techLayer/store';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


store.subscribe(() => {
  const isDarkMode = store.getState().darkMode.isDarkMode;
  const body = document.querySelector('body');
  if (body) {
    body.classList.toggle('light-mode', isDarkMode); // Toggle based on isDarkMode
  }
});

