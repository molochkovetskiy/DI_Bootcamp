const {
    _getAllPosts,
    _getPostById,
    _insertPost,
    _updatePost,
    _deletePost,
} = require('../models/posts.model.js');

const getAllPosts = async (req, res) => {
    try {
        const data = await _getAllPosts();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: 'Not found' });
    }
};

const getPostById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await _getPostById(id);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: 'No post match this id' })
    }
};

const createPost = async (req, res) => {
    try {
        const data = await _insertPost(req.body);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: err.message });
    }
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _updatePost(req.body, id);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: err.message });
    }
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _deletePost(id);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: err.message });
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};