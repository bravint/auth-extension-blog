const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');

const checkToken = (token) => jwt.verify(token, secret);

const idToInteger = (params) => {
    let { id } = params;

    return parseInt(id, 10);
};

const prisma = new PrismaClient();

const saltRounds = 10;

const secret = process.env.SECRET;

module.exports = {
    checkToken,
    idToInteger,
    prisma,
    saltRounds,
    secret,
};
