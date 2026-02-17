// ThemeContext.js - Enhanced with localStorage persistence
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage, default to light theme
  const [isDark, setIsDark] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('learn-data-skills-theme');
      return savedTheme === 'dark';
    } catch (error) {
      console.error('Error reading theme from localStorage:', error);
      return false; // Default to light theme
    }
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('learn-data-skills-theme', isDark ? 'dark' : 'light');
      // Also update document root for global CSS access if needed
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    } catch (error) {
      console.error('Error saving theme to localStorage:', error);
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prevTheme => !prevTheme);
  };

  // Provide both isDark and toggleTheme to all children
  const value = {
    isDark,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;