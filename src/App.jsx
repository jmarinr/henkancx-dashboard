import { ThemeProvider } from './context/ThemeContext';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Analitica from './components/Analitica';

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

  // Actualizar navegación
  useEffect(() => {
    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args) {
      originalPushState.apply(this, args);
      const path = args[2];
      if (path === '/analitica') {
        window.location.hash = 'analitica';
      } else if (path === '/') {
        window.location.hash = 'dashboard';
      }
    };
  }, []);

  return (
    <ThemeProvider>
      <Header />
      {currentPage === 'analitica' ? (
        <Analitica onBack={() => window.location.hash = 'dashboard'} />
      ) : (
        <Dashboard />
      )}
    </ThemeProvider>
  );
}

export default App;
