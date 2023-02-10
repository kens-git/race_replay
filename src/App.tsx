import { useContext } from 'react';
import ThemeContext from './stores/theme';
import ReplayControls from './components/sections/replay_controls/ReplayControls';

function App() {
  const themeCtx = useContext(ThemeContext);

  const onThemeButton = () => {
    themeCtx.toggleTheme();
  };

  return (
    <>
      <button
        onClick={onThemeButton}
        className="static left-0 top-0 dark:bg-gray-300"
      >
        Swap Theme (current: {themeCtx.theme})
      </button>
      <div className="grid place-items-center h-screen bg-document dark:bg-document-dark">
        <div className="px-[14px] py-[14px] w-max-[1280px] w-min-[1133px] h-max-[800] h-min-[744]">
          <ReplayControls />
        </div>
      </div>
    </>
  );
}

export default App;
