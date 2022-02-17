const express = require('express');

const router = express.Router();

const jwt = require('jsonwebtoken');

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
    console.log('in checkPermission')

    const token = req.headers.authorization;

    if (!token) res.status(401).json('user not logged in');

    const secret = process.env.SECRET;

    const checkToken = (token) => jwt.verify(token, secret);

    const check = checkToken(token);

    if (!check) return res.status(401).json('user not logged in');

    console.log('checkPermission OK, calling next()')

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
