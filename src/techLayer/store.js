import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './reducers';

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

export default store;