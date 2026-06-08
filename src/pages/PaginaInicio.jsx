import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useClima } from '../hooks/useClima';
import ClimaActual from '../organisms/ClimaActual';
import PronosticoGrid from '../organisms/PronosticoGrid';

const PaginaInicio = () => {
  const { datos, cargando, error } = useClima();

  return (
    <>
      <Helmet>
        <title>WissenWeather | Clima en Quito</title>
        <meta name="description" content="Pronóstico del clima en tiempo real para Quito con WissenWeather." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white transition-colors">
            🌤 WissenWeather
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">Clima en tiempo real para Quito, Ecuador</p>
        </header>

        {cargando && <p className="text-center text-slate-500 dark:text-slate-400">Cargando datos del clima...</p>}
        {error && <p className="text-center text-red-500 bg-red-100 p-4 rounded-lg">Error: {error}</p>}

        {!cargando && !error && datos && (
          <main>
            <ClimaActual current={datos.current} />
            <PronosticoGrid daily={datos.daily} />
          </main>
        )}
      </div>
    </>
  );
};

export default PaginaInicio;