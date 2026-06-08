import React from 'react';

const ClimaActual = ({ current }) => {
  if (!current) return null;

  return (
    <section className="bg-blue-100 dark:bg-slate-800 p-6 rounded-2xl text-center shadow-lg transition-colors">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Clima Actual</h2>
      <div className="text-6xl font-extrabold text-blue-600 dark:text-blue-400 my-4">
        {current.temperature_2m}°C
      </div>
      <div className="flex justify-center gap-4 text-slate-600 dark:text-slate-300">
        <p>Viento: <strong>{current.windspeed_10m} km/h</strong></p>
        <p>Humedad: <strong>{current.relativehumidity_2m}%</strong></p>
      </div>
    </section>
  );
};

export default ClimaActual;