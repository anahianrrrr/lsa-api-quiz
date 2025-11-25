const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    _id: { type: String, required: true }, // <--- AGREGAMOS ESTO (Ahora el ID es manual)
    title: { type: String, required: true },
    category: { type: String, required: true },
    difficulty: { type: String, default: 'medio' },
    description: String
});

module.exports = mongoose.model('Quiz', quizSchema);