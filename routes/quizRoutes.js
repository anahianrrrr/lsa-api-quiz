const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

// Rutas de nuevo
router.get('/', quizController.getAllQuizzes);     
router.post('/', quizController.createQuiz);       
router.put('/:id', quizController.updateQuiz);     
router.delete('/:id', quizController.deleteQuiz);  

module.exports = router;
