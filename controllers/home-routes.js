const router = require('express').Router();
//import models

//Routes

router.get('/', async (req, res) => {
    res.render('blog homepage')
})

module.exports = router