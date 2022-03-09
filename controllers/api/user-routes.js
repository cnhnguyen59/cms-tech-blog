const router = require('express').Router();
const{ User } = require('../../models')

//GET /api/user/create
//desc: create new ueser
router.post('/new-user', async (req,res) =>{
    try{
    const newUserData = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    const userData = await User.findOne({
        where:{
            email: req.body.email
            }
        })  
    const user_id = userData.dataValues.id


    req.session.user_id = user_id;
    req.session.logged_in = true;
    

    console.log(`user: ${req.session.user_id}, logged in: ${req.session.logged_in}`)
    
    res.status(200).json({message:"New User Created"})

    }catch(err){
        console.log(err)
    }
})


//GET /api/users/login
//desc: login
router.post('/login', async (req, res) => {
    if(req.session.logged_in){
        res.render('/')
        return
    }
    try{
        const userData = await User.findOne({
            where:{email:req.body.email}
        })

        if(!userData) {
            res.status(400).json({message: 'Incorrect email. Please try again.'})
            return;
        }
        console.log(req.body.password)

        const validPassword = await userData.checkPassword(req.body.password)
        
        if (!validPassword) {
            res
              .status(400)
              .json({ message: 'Incorrect password, please try again' });
            return;
          }

        req.session.save(() => {
            req.session.user_id = userData.id
            req.session.logged_in = true

            res.status(200).json({user: userData, message: 'You are now logged in!'})
        })
        
        res.rend
    } catch(err){
        console.log(err)
    }
})

router.post('/logout', (req, res) => {
    // When the user logs out, destroy the session
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;