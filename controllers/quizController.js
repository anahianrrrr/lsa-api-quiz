const Quiz = require('../models/Quiz');

// el get
exports.getAllQuizzes = async (req, res) => {
    try {
        //busca x nombre nivel de dificultd y categoria
        const { difficulty, category, search } = req.query;
        let query = {};

        
        if (difficulty) query.difficulty = difficulty;
        
        
        if (category) query.category = category;

        
        if (search) {
            query.title = { $regex: search, $options: 'i' };
        }

        const quizzes = await Quiz.find(query);
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getQuizById = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) return res.status(404).json({ message: 'Quiz no encontrado' });
        res.json(quiz);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//crear un nuevo quiz
exports.createQuiz = async (req, res) => {
    try {
        const newQuiz = new Quiz(req.body);
        const savedQuiz = await newQuiz.save();
        res.status(201).json(savedQuiz);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// actualiza
exports.updateQuiz = async (req, res) => {
    try {
        const updatedQuiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedQuiz);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//elimina
exports.deleteQuiz = async (req, res) => {
    try {
        await Quiz.findByIdAndDelete(req.params.id);
        res.json({ message: 'Quiz eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
