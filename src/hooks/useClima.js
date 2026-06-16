import { useState, useEffect } from 'react';

export const useClima = (ciudad) => {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let activo = true; 

    const obtenerClima = async () => {
      try {
        setCargando(true);
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${ciudad.lat}&longitude=${ciudad.lon}&current=temperature_2m,windspeed_10m,weathercode,relativehumidity_2m&daily=temperature_2m_max,temperature_2m_min&timezone=${ciudad.tz}&forecast_days=5`;
        
        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error('Error al obtener los datos del clima');
        
        const resultado = await respuesta.json();
        
        if (activo) {
          setDatos(resultado);
          setError(null);
        }
      } catch (err) {
        if (activo) setError(err.message);
      } finally {
        if (activo) setCargando(false);
      }
    };

    obtenerClima();

    return () => {
      activo = false;
    };
  }, [ciudad]);

  return { datos, cargando, error };
};