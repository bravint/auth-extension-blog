const { idToInteger, prisma, saltRounds} = require('../utils');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

const secret = process.env.SECRET

const hashedPassword = (password) => bcrypt.hashSync(password, saltRounds);

const createToken = (payload) => jwt.sign(payload, secret);

const checkPassword = async (textPassword, hashedPassword) => {
    try {
        return await bcrypt.compare(textPassword, hashedPassword);
    } catch (error) {
        console.log(`error in password check`, error);
        return error;
    }
};

const checkToken = (token) => jwt.verify(token, secret)

const authUser = async (req, res) => {
    const { username, password } = req.body;

    const foundUser = await prisma.user.findUnique({
        where: {
            username,
        },
    });

    if (!foundUser) return res.status(401).json('No user found');

    const checkedPassword = checkPassword(password, foundUser.password);

    if (!checkedPassword) return res.status(401).json('User authentication failed');

    const payload = {
        username, 
        id: foundUser.id,
    }

    console.log(`payload`, payload)

    const token = createToken(payload, secret)

    res.status(201).json(token)
};

const createUser = async (req, res) => {
    const user = generateUser(req.body);
    const profile = generateProfile(req.body);

    let createdUser = await prisma.user.create({
        data: {
            ...user,
            profile: {
                create: {
                    ...profile,
                },
            },
        },
        include: {
            profile: true,
        },
    });

    delete createdUser.password;

    return res.json(createdUser);
};

const updateUser = async (req, res) => {
    const id = idToInteger(req.params);

    const user = generateUser(req.body);
    const profile = generateProfile(req.body);

    const updatedUser = await prisma.user.update({
        where: {
            id,
        },
        data: {
            ...user,
            profile: {
                update: {
                    ...profile,
                },
            },
        },
        include: {
            profile: true,
        },
    });

    return res.json(updatedUser);
};

const updateProfile = async (req, res) => {
    const id = idToInteger(req.params);

    const profile = generateProfile(req.body);

    const updatedProfile = await prisma.profile.update({
        where: {
            id,
        },
        data: {
            ...profile,
        },
    });

    return res.json(updatedProfile);
};

const generateUser = (requestBody) => {
    let { username, email, password } = requestBody;

    let user = {};

    if (username) user = { ...user, username };
    if (password) {
        password = hashedPassword(password);
        user = { ...user, password };
    }

    if (email) user = { ...user, email };

    return user;
};

const generateProfile = (requestBody) => {
    const { firstName, lastName, age, pictureUrl } = requestBody;

    let profile = {};

    if (firstName) profile = { ...profile, firstName };
    if (lastName) profile = { ...profile, lastName };
    if (firstName) profile = { ...profile, age };
    if (firstName) profile = { ...profile, pictureUrl };

    return profile;
};

const deleteUser = async (req, res) => {
    const token = req.headers.authorization

    const id = idToInteger(req.params);

    const deletedUser = await prisma.user.delete({
        where: {
            id,
        },
    });

    return res.json(deletedUser);
};

module.exports = {
    authUser,
    createUser,
    updateUser,
    updateProfile,
    deleteUser,
};
