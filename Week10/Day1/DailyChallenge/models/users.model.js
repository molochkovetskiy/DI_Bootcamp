const { db } = require('../config/db.js');

const _registerUser = (email, password) => {
    return db('users')
        .insert({ email, password })
        .returning(['id', 'email', 'password']);
};

const _loginUser = (email) => {
    return db('users')
        .select('password')
        .where({ email });
};

const _getAllUsers = () => {
    return db('users')
        .select('id', 'email', 'password')
};

const _getUserById = (id) => {
    return db('users')
        .select('id', 'email', 'password')
        .where({ id });
};

const _updateUser = ({ email, password }, id) => {
    return db('users')
        .update({ email, password })
        .where({ id })
        .returning(['id', 'email', 'password']);
};

module.exports = {
    _registerUser,
    _loginUser,
    _getAllUsers,
    _getUserById,
    _updateUser,
};