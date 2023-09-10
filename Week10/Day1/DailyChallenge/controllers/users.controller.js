const bcrypt = require('bcrypt');

const {
    _registerUser,
    _loginUser,
    _getAllUsers,
    _getUserById,
    _updateUser,
} = require('../models/users.model.js');

// Register route
const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const data = await _registerUser(email, hashedPassword);

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

// Login route
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await _loginUser(email);
        const isPasswordValid = await bcrypt.compare(password, data[0].password);

        if (!isPasswordValid) {
            return res.status(401).json({ msg: 'Invalid password' });
        }

        res.status(200).json({ msg: 'Hi! Welocme back again' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

// Retrieve all users
const getAllUsers = async (req, res) => {
    try {
        const data = await _getAllUsers();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: 'Not found' });
    }
};

// Retrieve a specific user by ID
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await _getUserById(id);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: 'User not found' })
    }
};

// Update a user’s information by ID
const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _updateUser(req.body, id);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: err.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser,
};