const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

//las turat
router.get('/', questionController.getAllQuestions);
router.post('/', questionController.createQuestion);
router.delete('/:id', questionController.deleteQuestion);

module.exports = router;
//hay que ver para la preteisis
