import React, { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeData {
  theme: Theme;
  toggleTheme(): void;
}

const getOppositeTheme = (theme: Theme): Theme => {
  return theme === 'dark' ? 'light' : 'dark';
};

const ThemeContext = React.createContext<ThemeData>({
  theme: 'dark',
  toggleTheme: () => {},
});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState<Theme>((): Theme => {
    return (localStorage.getItem('theme') || 'dark') as Theme;
  });

  const toggleTheme = () => {
    setTheme((theme: Theme) => getOppositeTheme(theme));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove(getOppositeTheme(theme));
    if (theme === 'dark') {
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
