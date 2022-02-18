const express = require('express');

const router = express.Router();

const { checkToken } = require('../utils');

const {
    getPost,
    getPostByUser,
    createPost,
    createComment,
    updatePost,
    handleUpdateComment,
    updateCategory,
    deletePost,
    handleDeleteComment,
} = require('../controllers/post');

function checkPermission(req, res, next) {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json('user not logged in');

    const check = checkToken(token);

    if (!check) return res.status(401).json('user not logged in');

    next();
}

router.get('/', getPost);

router.get('/user/:user', getPostByUser);

router.post('/', checkPermission, createPost);

router.post('/:id/comment/', checkPermission, createComment);

router.put('/:id', checkPermission, updatePost);

router.put('/:id/comment/:id', checkPermission, handleUpdateComment);

router.put('/category/:id', checkPermission, updateCategory);

router.delete('/:id', checkPermission, deletePost);

router.delete('/:id/comment/:id', checkPermission, handleDeleteComment);

module.exports = router;
