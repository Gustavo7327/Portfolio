import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/poppins";
import './index.css'
import App from './App.jsx'
import { initTheme } from './scripts/Theme';

initTheme();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
