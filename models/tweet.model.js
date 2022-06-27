const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Text is required']
  },
})

// const tweetModel = mongoose.model('tweet', tweetSchema)

module.exports = tweetSchema