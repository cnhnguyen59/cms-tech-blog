const User = require('./User');
const Article = require('./Article')
const Comments = require('./Comments')

User.hasMany(Article, {
    foreignKey: 'user_id'
});

Article.belongsTo(User, {
    foreignKey: 'user_id'
})

Article.hasMany(Comments, {
    foreignKey: 'article_id'
})

Comments.belongsTo(Article,{
    foreignKey: 'article_id'
})

User.hasMany(Comments, {
    foreignKey: 'user_id'
})

Comments.belongsTo(User,{
    foreignKey:'user_id'
})


module.exports = {User, Article, Comments}