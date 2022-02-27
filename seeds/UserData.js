const { getMaxListeners } = require('process')
const { User } = require('../models')

const userData = [
    {
        username: 'codeWChristine',
        email:'cnhnguyen@gmail.com',
        password: 'mypassword'
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;