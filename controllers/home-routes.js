const router = require('express').Router();
//import models

//Routes

router.get('/', async (req, res) => {
    try{
        res.render('homepage')
    } catch{
        console.log(err)
    }
})

module.exports = router