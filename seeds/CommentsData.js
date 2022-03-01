const { Comments } = require('../models')

const commentData = [
    {
        comment: 'This is a comment',
        date_created: 'February 28, 2022 7:00:00',
        user_id: 2,
        article_id: 1
    },
    {
        comment: 'This is a comment',
        date_created: 'February 28, 2022 7:00:00',
        user_id: 2,
        article_id: 2
    },
    {
        comment: 'This is a comment',
        date_created: 'February 28, 2022 7:00:00',
        user_id: 2,
        article_id: 3
    },
]

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments