const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    _id: { type: String, required: true }, // <--- AGREGAMOS ESTO (Ahora el ID es manual)                   
    statement: { type: String, required: true },
    videoUrl: { type: String, required: true },
    options: [{ type: String }],
    correctAnswer: { type: String, required: true },
    // CAMBIO IMPORTANTE: 'ref' sigue apuntando a Quiz, pero el tipo ahora es String
    quizId: { type: String, ref: 'Quiz', required: true } 
});

module.exports = mongoose.model('Question', questionSchema);