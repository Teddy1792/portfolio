import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Define initial state
const initialState = {
  isDarkMode: true, // Default to dark mode
};

// Define actions and reducer
const TOGGLE_THEME = 'TOGGLE_THEME';

const toggleThemeAction = () => ({
  type: TOGGLE_THEME,
});

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};

// Create store with reducer and middleware
const store = createStore(themeReducer, applyMiddleware(thunk));

export default store;
