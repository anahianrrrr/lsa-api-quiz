const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

// Rutas CRUD
router.get('/', quizController.getAllQuizzes);     // GET /api/quizzes (Soporta ?search=x&difficulty=y)
router.get('/:id', quizController.getQuizById);    // GET /api/quizzes/ID
router.post('/', quizController.createQuiz);       // POST /api/quizzes
router.put('/:id', quizController.updateQuiz);     // PUT /api/quizzes/ID
router.delete('/:id', quizController.deleteQuiz);  // DELETE /api/quizzes/ID

module.exports = router;