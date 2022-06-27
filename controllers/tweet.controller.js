const TweetModel = require('../models/tweet.model')
const UserModel = require('../models/user.model')

// async function postTweet(req, res) {
//   try {
//     const user = await UserModel.findById(req.params.userId)
//     const tweet = await TweetModel.create(req.body)
//     user.tweets.push(tweet.id)
//     await user.save()
//     res.send(`Tweet posted! ${tweet}`)
//   } catch (error) {
//     res.send(`Error posting tweet: ${error}`)
//   }
// }

async function postTweet(req, res) {
  try {
    const user = await UserModel.findById(req.params.userId)
    user.tweets.push(req.body)
    await user.save()
    res.send(`Tweet posted!`)
  } catch (error) {
    res.send(`Error posting tweet: ${error}`)
  }
}

module.exports = {
  postTweet
}