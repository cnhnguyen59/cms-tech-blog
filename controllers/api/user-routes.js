const router = require('express').Router();

const{ User, Article, Comments } = require('../../models')

//GET /api/users/
//desc: get all users
router.get('/login', async (req, res) => {
    try{
        const userData = User.findOne({
            where:{ email:req.body.email}
        })

        if(!userData) {
            res.status(400).json({message: 'Incorrect email or password. Please try again.'})
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password)
        
        if (!validPassword) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again' });
            return;
          }

        req.sessions.save(() => {
            req.session.user_id = userData.user_id
            req.session.logged_in = true

            res.json({user: userData, message: 'You are now logged in!'})
        })
    } catch(err){
        console.log(err)
    }
})