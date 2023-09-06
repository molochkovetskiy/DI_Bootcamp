const express = require('express');
const cors = require('cors');
const { quiz_router } = require('./routes/quiz.router.js');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api/quiz', quiz_router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

