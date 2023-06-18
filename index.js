const express = require('express')
const app = express()
const cors = require('cors')
const Blog = require('./models/blog')
const config = require('./utils/config')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
var morgan = require('morgan')
app.use(morgan('dev'))

mongoose.connect(config.MONGODB_URI)
.then(response=>logger.info(`connected hai`))
.catch(error=>logger.error(error))

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/',(reqeust,response) => {
    response.send('<h1>Request recieved</h1>')
})
app.get('/api/blogs', (request, response,next) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})
app.get('/api/blogs/:id', (request, response,next) => {
  Blog
    .findById(request.params.id)
    .then(blogs => {
      response.json(blogs)
    })
  .catch(error=>next(error))
})


app.post('/api/blogs', (request, response, next) => {
  const body = request.body
  const blog = new Blog(request.body)

  logger.info(`Here's the result`,blog)
  if(blog.title === undefined){
    response.status(400).json({error : 'empty data'})
  }
  else{    
  blog
  .save()
  .then(result => {
    response.status(201).json(result)
  })
  .catch(error=>next(error))
  }
})

// const errorHandler = (error,request,response,next) => {
//   logger.error(error.message)
//   if(error.name === 'CastError'){
//     response.status(400).json({ error : 'malformated id'})
//   }
//   next(error)
// }
// const unknown = (request,response) => {
//   response.status(404).json({ error : `Page not found`})
// }
app.use(unknown)
app.use(errorHandler)
app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})