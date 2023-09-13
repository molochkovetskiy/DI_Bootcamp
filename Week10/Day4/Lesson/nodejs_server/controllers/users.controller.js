const { users } = require('../config/db.js');

const getAllUsers = (req, res) => {
    res.json(users);
};

const getUser = (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
};

module.exports = {
    getAllUsers,
    getUser
};