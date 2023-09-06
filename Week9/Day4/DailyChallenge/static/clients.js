const questionText = document.getElementById('question-text');
const feedbackElement = document.getElementById('feedback');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit-button');
const scoreElement = document.getElementById('score');
const scoreContainer = document.getElementById('score-container');

let currentQuestionIndex = -1;
let totalQuestions = -1;

async function fetchQuestion() {
    try {
        const apiUrl = 'http://localhost:3000/api/quiz';
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Failed to fetch the question');
        } else {
            const data = await response.json();
            questionText.innerText = data.question;
            totalQuestions = data.totalQuestions;
            currentQuestionIndex = data.id + 1;
            answerInput.value = '';
        }
    } catch (err) {
        console.log(err);
    }
};

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const userAnswer = answerInput.value.trim();
    const answerObj = { answer: userAnswer };

    fetch('http://localhost:3000/api/quiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(answerObj),
    })
        .then((response) => response.json())
        .then((data) => {
            feedbackElement.innerText = data.msg;
            scoreElement.innerText = data.score;
        });

    if (currentQuestionIndex == totalQuestions) {
        questionText.innerText = 'Quiz Completed!';
        answerInput.style.display = 'none';
        submitButton.style.display = 'none';
        scoreContainer.style.display = 'none';
        displayFinalScore();
    } else {
        fetchQuestion();
    }
});

async function displayFinalScore() {
    try {
        const apiUrl = 'http://localhost:3000/api/quiz/score';
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Failed to fetch the final score');
        } else {
            const data = await response.json();
            questionText.innerText = data.msg;
        }
    } catch (err) {
        console.log(err);
    }
};

fetchQuestion();