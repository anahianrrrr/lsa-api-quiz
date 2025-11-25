require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const quizRoutes = require('./routes/quizRoutes');
const questionRoutes = require('./routes/questionRoutes');

const app = express();

// Middleware 
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Conectado a MongoDB Atlas'))
    .catch((err) => console.error('❌ Error de conexión:', err));


app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'index.html'));
});

// RUTAS DE LA API 

// Ruta 1: Quizzes (CRUD Completo)
app.use('/api/quizzes', quizRoutes);

// Ruta 2: Questions (GET y POST)
app.use('/api/questions', questionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`);
});
