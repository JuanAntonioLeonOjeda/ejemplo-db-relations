const router = require('express').Router()

const userRouter = require('./user.router')
const tweetRouter = require('./tweet.router')

router.use('/users', userRouter)
router.use('/tweets', tweetRouter)

module.exports = router