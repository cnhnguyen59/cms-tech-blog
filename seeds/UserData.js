
const { User } = require('../models')
const sequelize = require('../config/connection')

const userData = [
    {
        username: 'codeWChristine',
        firstName: 'Christine',
        lastName: 'Nguyen',
        email:'cnhnguyen@gmail.com',
        password: 'mypassword'
    },
    {
        username: 'stanmanga96',
        firstName: 'Stanley',
        lastName: 'Lewis',
        email:'stanmanga96@gt.edu',
        password: 'mypassword'
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;