const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.json('Hello From Express');
});

app.post('/api/world', (req, res) => {
    const { value } = req.body;
    const responseMessage = `I received your POST request. This is what you sent me: ${value}`;

    res.json(responseMessage);
    console.log(value);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});