import { useContext } from 'react';
import ThemeContext from './stores/theme';

function App() {
  const themeCtx = useContext(ThemeContext);

  const onThemeButton = () => {
    themeCtx.toggleTheme();
  };

  return (
    <>
      <h1 className="text-teal-500 dark:text-teal-900">ayy</h1>
      <button onClick={onThemeButton}>Swap Theme</button>
    </>
  );
}

export default App;
