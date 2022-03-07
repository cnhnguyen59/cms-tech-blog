const router = require('express').Router();

const userRoutes = require('./user-routes.js')
const articleRoutes = require('./article-routes.js')
/* const commentRoutes = require('./comment-routes.js') */

router.use('/user', userRoutes)
router.use('/article', articleRoutes)
/* router.use('/comments', commentRoutes) */

module.exports = router;