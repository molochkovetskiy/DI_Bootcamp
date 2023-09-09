const fs = require('fs');
const bcrypt = require('bcrypt');
const path = require('path');
const usersFilePath = path.join(__dirname, '../config/users.json');

// Helper function to read user data from the JSON file
function readUsers() {
    try {
        const rawData = fs.readFileSync(usersFilePath, 'utf-8');
        return JSON.parse(rawData);
    } catch (err) {
        console.log('Error parsing user data:', err);
    }
}

// Helper function to write user data to the JSON file
function writeUsers(users) {
    try {
        const newData = JSON.stringify(users, null, 2);
        fs.writeFileSync(usersFilePath, newData);
    } catch (err) {
        console.log('Error writing user data:', err);
    }
}

// Register route
const registerUser = (req, res) => {
    const { fname, lname, email, username, password } = req.body;

    const users = readUsers();

    // Check if username already exists
    const existingUser = users.find(user => user.username == username);
    if (existingUser) {
        return res.status(400).json({ msg: 'Username already exists' });
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ msg: 'Error hashing password' });
        }

        const highestId = users.reduce((maxId, user) => {
            const userId = parseInt(user.id, 10);
            return userId > maxId ? userId : maxId;
        }, 0);

        const newUser = {
            id: (highestId + 1).toString(),
            fname,
            lname,
            email,
            username,
            password: hash
        };
        users.push(newUser);
        writeUsers(users);

        res.status(201).json({ msg: `User ${newUser.username} registered successfully` });
    });
};

// Login route
const loginUser = (req, res) => {
    const { username, password } = req.body;

    const users = readUsers();

    // Find user by username
    const user = users.find(user => user.username == username);
    if (!user) {
        return res.status(401).json({ msg: 'Username doesn\'t exist' });
    }

    // Compare the hashed password
    bcrypt.compare(password, user.password, (err, result) => {
        if (err || !result) {
            return res.status(401).json({ msg: 'Invalid credentials' });
        }

        res.status(200).json({ msg: `Hi ${user.username}! Welcome back again` });
    });
};

// Retrieve a list of all users
const getAllUsers = (req, res) => {
    const users = readUsers();
    res.status(200).json(users);
};

// Retrieve a specific user by ID
const getUser = (req, res) => {
    const userId = req.params.id;
    const users = readUsers();
    const user = users.find(user => user.id === userId);

    if (!user) {
        return res.status(404).json({ msg: 'User not found' });
    }

    res.status(200).json(user);
};

// Update a user’s information by ID
const updateUser = (req, res) => {
    const userId = req.params.id;
    const { fname, lname, email } = req.body;

    const users = readUsers();
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ msg: 'User not found' });
    }

    users[userIndex] = {
        ...users[userIndex],
        fname,
        lname,
        email,
    };

    writeUsers(users);

    res.status(200).json({ message: 'User updated successfully.' });
};

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUser,
    updateUser,
};