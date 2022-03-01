const { Article, User } = require('../models');

const router = require('express').Router();
//import models

//Routes

router.get('/', async (req, res) => {
    try{
        const articlesData = await Article.findAll({
            include: [
                {
                    model: User,
                    attributes:['username']
                }
            ],
            /* raw: true */
        })
        const articles = articlesData.map((article) =>
            article.get({ plain: true })
        );
        console.log(articles)
        res.render('homepage', {articles})
    } catch(err){
        console.log(err)
    }
})

router.get('/article/:id', async (req,res) => {
    try {
        const articleData = await Article.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: [
                    'id',
                    'firstName',
                    'lastName',
                    'username'
                ]
            }]
        })
        article = articleData.get({plain:true})
        console.log(article)

        res.render('article', {article})
    } catch(err){
        console.log(err)
    }

})

module.exports = router