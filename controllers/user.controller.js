const UserModel = require('../models/user.model')

async function getAllUsers (req, res) {
  try {
    const users = await UserModel.find().populate('tweets')
    res.json(users)
  } catch (error) {
    res.send(`Error getting all users: ${error}`)
  }
}

async function createUser(req, res) {
  try {
     const user = await UserModel.create(req.body)
     res.send(`User created! ${user}`)
  } catch (error) {
    res.send(`Error creating user: ${error}`)
  }
}

module.exports = {
  getAllUsers,
  createUser
}