const userRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')
const {info} = require('../utils/logger')
userRouter.get('/', async (request, response, next) => {
    const result = await User.find({})
    info(`Here's the result`,result, typeof result)
    response.status(200).json(result)
  })

userRouter.post('/', async (request, response, next) => {
    const {username,name,password} = request.body
    const saltRounds = 10 
    const passwordHash = await bcrypt.hash(password,saltRounds)
    const newUser = new User({
        username,
        name,
        passwordHash
    })
    const savedUser = await newUser.save()
    info(`Here's the result`,savedUser, typeof savedUser)
    response.status(200).json(savedUser)
  })

  module.exports = userRouter