const Quiz = require('../models/Quiz');

// 1. GET: Ver todos con FILTROS y BÚSQUEDA [cite: 39, 43, 44]
exports.getAllQuizzes = async (req, res) => {
    try {
        const { difficulty, category, search } = req.query;
        let query = {};

        // Filtro 1: Dificultad
        if (difficulty) query.difficulty = difficulty;
        
        // Filtro 2: Categoría
        if (category) query.category = category;

        // Búsqueda por nombre (Search) usando Regex (búsqueda flexible)
        if (search) {
            query.title = { $regex: search, $options: 'i' };
        }

        const quizzes = await Quiz.find(query);
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. GET: Obtener uno por ID [cite: 40]
exports.getQuizById = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) return res.status(404).json({ message: 'Quiz no encontrado' });
        res.json(quiz);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 3. POST: Crear un nuevo Quiz
exports.createQuiz = async (req, res) => {
    try {
        const newQuiz = new Quiz(req.body);
        const savedQuiz = await newQuiz.save();
        res.status(201).json(savedQuiz);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 4. PUT: Actualizar un Quiz [cite: 41]
exports.updateQuiz = async (req, res) => {
    try {
        const updatedQuiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedQuiz);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 5. DELETE: Eliminar un Quiz [cite: 42]
exports.deleteQuiz = async (req, res) => {
    try {
        await Quiz.findByIdAndDelete(req.params.id);
        res.json({ message: 'Quiz eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};