const router = require('express').Router(),
authController = require('../controllers/auth')

router.post('/login',authController.login)
router.get('/login',authController.getLogin)
router.get('/dashboard',authController.dashboard)

module.exports = router