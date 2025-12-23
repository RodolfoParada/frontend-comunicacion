// Task 4: Interceptores y Manejo Global de Peticiones (7 minutos)
// Implementando lógica global para todas las peticiones HTTP.

// 🔄 Patrón de Interceptores
// Request Interceptor - Modificar peticiones salientes:

// Configuración de instancia Axios con interceptores
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000
});

// Interceptor de petición - agregar token automáticamente
apiClient.interceptors.request.use(
  (config) => {
    // Agregar token de autenticación
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Agregar headers comunes
    config.headers['X-Client-Version'] = '1.0.0';

    return config;
  },
  (error) => {
    // Manejar errores de petición
    console.error('Error en petición:', error);
    return Promise.reject(error);
  }
);
// Response Interceptor - Manejar respuestas globalmente:

// Interceptor de respuesta
apiClient.interceptors.response.use(
  (response) => {
    // Transformar respuesta si es necesario
    return response.data; // Retornar solo data, no response completa
  },
  (error) => {
    // Manejo centralizado de errores
    if (error.response?.status === 401) {
      // Token expirado - redirigir a login
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    } else if (error.response?.status >= 500) {
      // Error del servidor - mostrar mensaje genérico
      console.error('Error del servidor:', error.response.data);
    } else if (error.code === 'NETWORK_ERROR') {
      // Error de conexión
      console.error('Error de conexión');
    }

    return Promise.reject(error);
  }
);
// Concepto clave: Los interceptores permiten centralizar lógica común como autenticación, logging y manejo de errores.