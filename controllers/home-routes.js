const { cp } = require('fs');
const { Article, User, Comments } = require('../models');

const router = require('express').Router();
//import models


//Routes

//GET Login
router.get('/login', async(req, res)=>{
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login')
})

//GET Create account page
router.get('/create-account', async (req,res)=> {
    res.render('createUser')
})

//GET homepage
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
        console.log(`logged in: req.session.loggedIn`)
        res.render('homepage', {articles, loggedIn:req.session.logged_in})
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

        res.render('article', {article, loggedIn:req.session.logged_in})
    } catch(err){
        console.log(err)
    }

})

// GET User dashboard
router.get('/dashboard', async (req, res) =>{
    if(!req.session.logged_in){
        res.redirect('/login')
    }
    try{ 
        const articles = await Article.findAll({
            where:{
                user_id: req.session.user_id
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
        res.status(400).json({message:'not logged in'})
    }
})

//GET

router.get('/new-article', (req, res) => {
    res.render('newArticle')
})
module.exports = router;