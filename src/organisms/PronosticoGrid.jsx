import React from 'react';

const PronosticoGrid = ({ daily }) => {
  if (!daily) return null;

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 text-center">Pronóstico 5 Días</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {daily.time.map((fecha, index) => (
          <article key={fecha} className="bg-white dark:bg-slate-700 p-4 rounded-xl shadow border border-slate-200 dark:border-slate-600 text-center transition-colors">
            <p className="font-semibold text-slate-700 dark:text-slate-200">{new Date(fecha).toLocaleDateString('es-EC', { weekday: 'short' })}</p>
            <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              <p>Máx: <span className="font-bold text-red-500">{daily.temperature_2m_max[index]}°C</span></p>
              <p>Mín: <span className="font-bold text-blue-500">{daily.temperature_2m_min[index]}°C</span></p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PronosticoGrid;