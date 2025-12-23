// Task 2: Fetch API vs Axios (8 minutos)
// Comparación entre la API nativa y la librería más popular para peticiones HTTP.

// 📚 Ventajas de Axios sobre Fetch
// Fetch API (nativo del navegador):

// Fetch básico - verboso y manual
async function obtenerUsuarios() {
  try {
    const respuesta = await fetch('/api/usuarios');

    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
Axios (librería especializada):

// Axios - más simple y poderoso
import axios from 'axios';

const obtenerUsuarios = () =>
  axios.get('/api/usuarios')
    .then(respuesta => respuesta.data)
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
// ¿Por qué Axios mejora la experiencia de desarrollo?

// Sintaxis más simple: Menos código boilerplate
// Transformación automática: JSON parsing automático
// Interceptores: Modificación global de peticiones/respuestas
// Timeouts: Control automático de tiempo de espera
// Cancelación: AbortController integrado
// Navegadores legacy: Mejor soporte para navegadores antiguos
// Concepto clave: Axios abstrae las complejidades de Fetch API, permitiendo enfocarse en la lógica de negocio.