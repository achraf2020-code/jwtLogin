const router = require('express').Router(),
authRoutes = require('./auth')

router.use('/auth',authRoutes)


module.exports = router