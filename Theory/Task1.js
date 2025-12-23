// Task 1: Fundamentos de Comunicación HTTP (8 minutos)
// Comprensión de los protocolos HTTP y el flujo de comunicación cliente-servidor.

// 🎯 ¿Por qué necesitamos comunicación HTTP?
// El frontend y backend son mundos separados que necesitan comunicarse:

// Frontend: Interfaz de usuario, lógica de presentación, experiencia del usuario
// Backend: Lógica de negocio, base de datos, procesamiento de datos
// HTTP: Puente estándar que conecta ambos mundos de manera segura
// Desafíos de la comunicación HTTP:

// Asincronía: Las peticiones no son instantáneas
// Estados: Loading, success, error requieren manejo específico
// Seguridad: Autenticación, CORS, headers de seguridad
// Errores: Diferentes tipos de errores requieren diferentes manejos
// 🌐 Métodos HTTP Fundamentales
// Los verbos HTTP representan acciones específicas:

// GET: Obtener datos (lectura, idempotente, cacheable)
// POST: Crear recursos nuevos
// PUT: Actualizar completamente un recurso
// PATCH: Actualizar parcialmente un recurso
// DELETE: Eliminar un recurso
// Concepto clave: Los métodos HTTP siguen convenciones REST que facilitan la comprensión y mantenimiento de APIs.

// Patrón básico de petición HTTP
async function hacerPeticion(url, metodo = 'GET', datos = null) {
  const config = {
    method: metodo,
    headers: {
      'Content-Type': 'application/json',
    }
  };

  if (datos && (metodo === 'POST' || metodo === 'PUT')) {
    config.body = JSON.stringify(datos);
  }

  const respuesta = await fetch(url, config);
  return await respuesta.json();
}

// Concepto clave: Las peticiones HTTP incluyen headers, body y parámetros que definen completamente la comunicación.