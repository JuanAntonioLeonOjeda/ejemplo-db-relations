const router = require('express').Router()

const {
  postTweet
} = require('../controllers/tweet.controller')

router.post('/:userId', postTweet)

module.exports = router