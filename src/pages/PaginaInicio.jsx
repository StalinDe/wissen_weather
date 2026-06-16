import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useClima } from '../hooks/useClima';
import ClimaActual from '../organisms/ClimaActual';
import PronosticoGrid from '../organisms/PronosticoGrid';

const CIUDADES = [
  { nombre: 'Quito, Ecuador', lat: -0.2298, lon: -78.5249, tz: 'America/Guayaquil' },
  { nombre: 'Guayaquil, Ecuador', lat: -2.1962, lon: -79.8862, tz: 'America/Guayaquil' },
  { nombre: 'Cuenca, Ecuador', lat: -2.9005, lon: -79.0045, tz: 'America/Guayaquil' },
  { nombre: 'Bogotá, Colombia', lat: 4.6097, lon: -74.0817, tz: 'America/Bogota' },
  { nombre: 'Lima, Perú', lat: -12.0432, lon: -77.0282, tz: 'America/Lima' }
];

const PaginaInicio = () => {
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState(CIUDADES[0]);
  
  const { datos, cargando, error } = useClima(ciudadSeleccionada);

  const handleCambioCiudad = (e) => {
    const indice = e.target.value;
    setCiudadSeleccionada(CIUDADES[indice]);
  };

  return (
    <>
      {/* Actualizar SEO al cambiar la Ciudad */}
      <Helmet>
        <title>WissenWeather | Clima en {ciudadSeleccionada.nombre}</title>
        <meta name="description" content={`Pronóstico del clima en tiempo real para ${ciudadSeleccionada.nombre}.`} />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white transition-colors">
            🌤 WissenWeather
          </h1>
          
          {/* Menú desplegable para seleccionar la ciudad */}
          <div className="mt-6 w-64">
            <label htmlFor="selector-ciudad" className="sr-only">Seleccionar ciudad</label>
            <select
              id="selector-ciudad"
              value={CIUDADES.indexOf(ciudadSeleccionada)}
              onChange={handleCambioCiudad}
              className="block w-full px-4 py-2 text-base text-slate-900 bg-white border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white dark:focus:ring-blue-400 transition-colors cursor-pointer"
            >
              {CIUDADES.map((ciudad, index) => (
                <option key={ciudad.nombre} value={index}>
                  {ciudad.nombre}
                </option>
              ))}
            </select>
          </div>
        </header>

        {cargando && <p className="text-center text-slate-500 dark:text-slate-400 font-medium">Cargando datos meteorológicos...</p>}
        {error && <p className="text-center text-red-500 bg-red-100 p-4 rounded-lg font-medium">Error: {error}</p>}

        {!cargando && !error && datos && (
          <main className="animate-fade-in">
            <ClimaActual current={datos.current} />
            <PronosticoGrid daily={datos.daily} />
          </main>
        )}
      </div>
    </>
  );
};

export default PaginaInicio;