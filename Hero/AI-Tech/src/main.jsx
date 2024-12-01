import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    document.title = "We miss you! 😭💔🙆‍♂️";
  } else {
    document.title = "AI & Digital Service";
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)