import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Suppress benign Framer Motion dev warnings
const originalError = console.error;
console.error = (...args) => {
  if (args[0]?.includes?.('Framer Motion')) return;
  originalError(...args);
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
