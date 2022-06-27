const mongoose = require('mongoose')

const TweetSchema = require('./tweet.model')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  // tweets: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'tweet'
  // }]
  tweets: [TweetSchema]
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel