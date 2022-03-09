const router = require('express').Router()
const { User, Articles, Comments, Article} = require('../../models')

//POST /api/article/new
//desc: create new post
router.post('/new', async (req, res) => {
    try{
        var normalizedDate = new Date(Date.now()).toISOString();
        const newArticleData = await Article.create({
            title: req.body.title,
            description: req.body.description,
            body: req.body.body,
            date_created: normalizedDate,
            user_id: req.session.user_id
        })
        res.status(200).json({message:'Article created!'})
    } catch(err){
        res.status(400).json({message:'Error occurred posting article'})
    }
})

module.exports = router