import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { ThemeContextProvider } from './stores/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
