import { Suspense, lazy, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Language Context
import { LanguageProvider } from './contexts/LanguageContext';

// Eager load critical components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';

// Lazy load below-the-fold components
const History = lazy(() => import('./components/sections/History').then(module => ({ default: module.History })));
const Schedule = lazy(() => import('./components/sections/Schedule').then(module => ({ default: module.Schedule })));
const Services = lazy(() => import('./components/sections/Services').then(module => ({ default: module.Services })));
const Location = lazy(() => import('./components/sections/Location').then(module => ({ default: module.Location })));
const Donate = lazy(() => import('./components/sections/Donate').then(module => ({ default: module.Donate })));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-parish-blue"></div>
  </div>
);

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-parish-text">
      {/* Skip link para accesibilidad */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <History />
          <Schedule />
          <Services />
          <Location />
          <Donate />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

// Render app
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);