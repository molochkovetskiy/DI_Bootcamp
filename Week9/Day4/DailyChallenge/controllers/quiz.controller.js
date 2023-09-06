const { triviaQuestions } = require('../config/questions.js');

let userScore = 0;
let currentQuestionIndex = 0;

const getQuestion = (req, res) => {
    const id = currentQuestionIndex;
    const question = triviaQuestions[currentQuestionIndex].question;
    const totalQuestions = triviaQuestions.length;

    res.status(200).json({ question, id, totalQuestions });
};

const getAnswer = (req, res) => {
    if (currentQuestionIndex >= triviaQuestions.length) {
        return res.send('Quiz is already completed. Please restart');
    }

    const userAnswer = req.body.answer;
    const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

    if (userAnswer.toLowerCase() == correctAnswer.toLowerCase()) {
        userScore++;

        msg = 'Correct!'
        score = userScore;

        res.json({ msg, score });
    } else {
        msg = `Wrong! The right answer is '${triviaQuestions[currentQuestionIndex].answer}'`
        score = userScore;

        res.json({ msg, score });
    }

    currentQuestionIndex++;
};

const displayScore = (req, res) => {
    const finalScore = userScore;
    userScore = 0;
    currentQuestionIndex = 0;

    res.json({ msg: `Your final score is ${finalScore}` });
};

module.exports = {
    getQuestion,
    getAnswer,
    displayScore
};