const { cp } = require('fs');
const { Article, User, Comments } = require('../models');

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
        })
        const articles = articlesData.map((article) =>
            article.get({ plain: true })
        ).reverse();
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
            },
            {
                model: Comments,
                attributes: [
                    'comment',
                    'date_created'
                ],
                include:[{
                    model: User,
                    attributes: [
                        'username'
                    ]
                }
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

router.get('/dashboard', async (req, res) =>{
    try{ 
        const articles = await Article.findAll({
            where:{
                user_id: 1
            },
            raw: true
        })

        if (articles.length > 0){

            articles.reverse()
            res.render('dashboard', {articles})
        } else {
            const articles = {none:true}
            res.render('dashboard', {articles})
        }
    }catch(err){
        console.log(err)
    }
})

module.exports = router