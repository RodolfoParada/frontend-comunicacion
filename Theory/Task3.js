// Task 3: Configuración de CORS (7 minutos)
// Entendiendo y configurando Cross-Origin Resource Sharing para comunicación segura.

// 🚫 ¿Qué es CORS y por qué existe?
// Cross-Origin Resource Sharing es una política de seguridad del navegador:

// Política SOP (Same-Origin Policy): Un origen no puede acceder a recursos de otro
// Origen definido por: Protocolo + dominio + puerto
// CORS permite excepciones controladas a esta política
// Ejemplos de violaciones CORS:

❌ http://localhost:3000 → http://api.example.com (dominios diferentes)
❌ https://app.com → http://app.com (protocolos diferentes)
❌ http://app.com → http://app.com:8080 (puertos diferentes)
✅ http://localhost:3000 → http://localhost:3001 (mismo dominio, puertos ok)


// ⚙️ Configuración CORS en Backend
// Configuración básica con Express.js:

const express = require('express');
const cors = require('cors');

const app = express();

// Configuración CORS simple
app.use(cors({
  origin: 'http://localhost:3000', // Solo permitir este origen
  credentials: true, // Permitir cookies/autenticación
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
}));

// O configuración más flexible
app.use(cors({
  origin: (origin, callback) => {
    // Lógica personalizada para validar orígenes
    const allowedOrigins = ['http://localhost:3000', 'https://miapp.com'];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Origen no permitido por CORS'));
    }
  }
}));
Concepto clave: CORS es una medida de seguridad que previene ataques CSRF, pero requiere configuración explícita para comunicación legítima entre dominios.

