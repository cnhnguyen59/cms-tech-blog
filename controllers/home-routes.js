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

module.exports = router