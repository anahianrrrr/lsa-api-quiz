const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// Definimos las rutas
router.get('/', questionController.getAllQuestions); // GET
router.post('/', questionController.createQuestion); // POST (¡Esta es la que arregla tu error!)
router.delete('/:id', questionController.deleteQuestion); // DELETE

module.exports = router;