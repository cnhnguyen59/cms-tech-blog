const router = require('express').Router();

const{ User, Article, Comments } = require('../../models')

//GET /api/users/create
//desc: create new ueser
router.post('/', async (req,res) =>{
    try{
        const newUserData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
    const response = await User.create(newUserData)

    const userData = await User.findOne({
        where:{
            email: req.body.email,
            attributes:{exclude: ['password']}
            }
        })  
    
        req.session.save(()=>{
            req.session.user_id = userData.id;
            req.session.logged_in = true;
        })
    }catch(err){
        console.log(err)
    }
})


//GET /api/users/login
//desc: login
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