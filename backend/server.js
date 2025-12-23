const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Permite que cualquier frontend se conecte
app.use(express.json());

let likes = 10;

// Ruta para probar en el navegador
app.get('/', (req, res) => res.send("Servidor Online ✅"));

// Ruta para los likes
app.patch('/api/like', (req, res) => {
  likes++;
  res.json({ likes });
});

app.listen(4000, () => console.log("🚀 Backend en puerto 4000"));