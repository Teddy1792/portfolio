import { TOGGLE_DARK_MODE } from "./actions";

// Initial state
const initialState = {
  // Checking mode from local storage if falsy (e.g., 0, null, undefined, etc.), it will be false; otherwise, true
  isDarkMode: !!JSON.parse(localStorage.getItem("darkmode")),
};

const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        // Getting value from the action file and changing isDarkMode state.
        isDarkMode: action.payload,
      };
    default:
      return state;
  }
};

export default darkModeReducer;
