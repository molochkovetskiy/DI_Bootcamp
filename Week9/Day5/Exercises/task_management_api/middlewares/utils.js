// Validation Middleware

function validateTaskData(req, res, next) {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ msg: 'Title and description are required' });
    }

    next();
}

// Error Handling Middleware
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    console.log('RUUUUNNNN');
    res.status(500).json({ msg: 'Internal server error' });
}

module.exports = {
    validateTaskData,
    errorHandler,
}