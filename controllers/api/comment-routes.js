const router = require('express').Router();
const { User, Article, Comments } = require('../../models')

//POST /api/commnets/new

router.post('/new', async (req, res)=>{
    try{
        var normalizedDate = new Date(Date.now()).toISOString();
        const comment = await Comments.create({
        comment: req.body.comment,
        date_created: normalizedDate,
        user_id: 2,
        article_id: req.body.article_id
        })
        res.status(200).json({message:"Comment posted"})
    }catch(err){
        res.status(400).json({message:"Error posting comment"})
    } 
})

module.exports = router;