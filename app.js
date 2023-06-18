//Contains only the connection to port part
const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./utils/config')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const blogRouter = require('./controllers/paths(Blog)')

var morgan = require('morgan')
app.use(morgan('dev'))
mongoose.set('strictQuery', false)
mongoose.connect(config.MONGODB_URI)
.then(response=>logger.info(`connected hai`))
.catch(error=>logger.error(error))

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/api/blogs',blogRouter)

app.use(middleware.unknown)
app.use(middleware.errorHandler)

module.exports = app