import React, { createContext, useContext, useState } from 'react';

// Create a context for dark mode
const DarkModeContext = createContext();

// Create a provider component to manage the dark mode state
export const DarkModeProvider = ({ children }) => {
  // State to track the dark mode status
  const [darkMode, setDarkMode] = useState(true);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to access the dark mode context
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
