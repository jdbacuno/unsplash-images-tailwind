import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const getInitialTheme = () => {
  if (localStorage.theme) {
    return localStorage.theme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [searchTerm, setSearchTerm] = useState('bird');

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
