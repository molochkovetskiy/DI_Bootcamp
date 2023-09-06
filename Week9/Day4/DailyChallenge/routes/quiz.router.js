const express = require('express');
const quiz_router = express.Router();

const {
    getQuestion,
    getAnswer,
    displayScore
} = require('../controllers/quiz.controller.js');

quiz_router.get('/', getQuestion);
quiz_router.post('/', getAnswer);
quiz_router.get('/score', displayScore);

module.exports = { quiz_router };