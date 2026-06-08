import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import PaginaInicio from './pages/PaginaInicio';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 font-sans">
        <header className="bg-white dark:bg-slate-800 shadow-sm transition-colors">
          <nav aria-label="Navegación principal" className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <span className="font-bold text-xl text-blue-600 dark:text-blue-400">WissenWeather.</span>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Alternar modo oscuro"
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white rounded-lg font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
            </button>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8">
          <PaginaInicio />
        </main>

        <footer className="text-center py-6 text-slate-500 dark:text-slate-400 text-sm">
          <p>Datos proporcionados por <a href="https://open-meteo.com/" className="text-blue-500 hover:underline">Open-Meteo API</a></p>
          <p>Instituto Superior Tecnológico Tecniempresarial Wissen · 2026</p>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;