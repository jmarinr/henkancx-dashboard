import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
