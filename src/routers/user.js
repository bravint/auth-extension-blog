const express = require('express');

const router = express.Router();

const {
    authUser,
    createUser,
    deleteUser,
    updateProfile,
    updateUser,
} = require('../controllers/user');

router.post('/login', authUser);

router.post('/', createUser);

router.delete('/:id', deleteUser);

router.put('/profile/:id', updateProfile);

router.put('/:id', updateUser);

module.exports = router;
