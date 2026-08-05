import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import './index.css';

// Prevent the browser from silently restoring an old scroll position
// on reload — let useHashScroll be the only thing controlling scroll.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LoadingScreen />
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
