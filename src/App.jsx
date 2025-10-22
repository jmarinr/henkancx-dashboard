import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Analitica from './components/Analitica';
import Settings from './components/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  useEffect(() => {
    // Simple routing basado en hash
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'dashboard';
      setCurrentPage(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args) {
      originalPushState.apply(this, args);
      const path = args[2];
      if (path === '/analitica') {
        window.location.hash = 'analitica';
      } else if (path === '/settings') {
        window.location.hash = 'settings';
      } else if (path === '/') {
        window.location.hash = 'dashboard';
      }
    };
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'analitica':
        return <Analitica onBack={() => window.location.hash = 'dashboard'} />;
      case 'settings':
        return <Settings onBack={() => window.location.hash = 'dashboard'} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <LanguageProvider>
      <ThemeProvider>
        <Header />
        {renderPage()}
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
