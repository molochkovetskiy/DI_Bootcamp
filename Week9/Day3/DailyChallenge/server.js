const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const { emojiArray } = require('./emojis.js')

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Serve static files (e.g., HTML, CSS, JavaScript)
app.use(express.static('public'));

function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojiArray.length);
    const correctEmoji = emojiArray[randomIndex];

    // Generate distractors
    const distractors = [];
    while (distractors.length < 3) {
        const randomDistractor = emojiArray[Math.floor(Math.random() * emojiArray.length)];
        if (!distractors.includes(randomDistractor.name) && randomDistractor.name !== correctEmoji.name) {
            distractors.push(randomDistractor.name);
        }
    }

    return {
        emoji: correctEmoji.emoji,
        correctName: correctEmoji.name,
        options: [...distractors, correctEmoji.name].sort(() => Math.random() - 0.5),
    };
}

app.get('/random-emoji', (req, res) => {
    const randomEmoji = getRandomEmoji();
    res.json(randomEmoji);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
