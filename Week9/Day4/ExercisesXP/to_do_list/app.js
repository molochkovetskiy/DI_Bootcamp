const express = require('express');
const app = express();
const port = 3000;

const { router } = require('./routes/todos.router.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/todos', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});