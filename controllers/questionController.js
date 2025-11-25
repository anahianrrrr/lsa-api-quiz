const Question = require('../models/Question');

// Obtener todas las preguntas
exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CREAR una pregunta (Esto es lo que te faltaba para el POST)
exports.createQuestion = async (req, res) => {
    try {
        const newQuestion = new Question(req.body);
        const savedQuestion = await newQuestion.save();
        res.status(201).json(savedQuestion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// ELIMINAR pregunta
exports.deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        await Question.findByIdAndDelete(id);
        res.json({ message: 'Pregunta eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};