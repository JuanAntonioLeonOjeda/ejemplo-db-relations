const express = require('express')
const mongoose = require('mongoose')

const app = express()

; (async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/", {
      dbName: 'db-relations'
    })
    console.log('Connected to DataBase')
  } catch (error) {
    console.log(`Error connecting to DataBase ${error}`)
  }
})()

try {
  app.use(express.json())
     .use('/api', require('./routes/router'))

     .listen(3000, () => {
      console.log('Server live, listenning on port 3000')
     })
} catch (error) {
  throw new Error (`Error starting Express: ${error}`)
}