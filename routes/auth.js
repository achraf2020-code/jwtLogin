const router = require('express').Router(),
authController = require('../controllers/auth')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/login',authController.login)
router.get('/login',authController.getLogin)
router.get('/dashboard',authMiddleware,authController.dashboard)

module.exports = router