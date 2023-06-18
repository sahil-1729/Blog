const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', (request, response,next) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  })

blogRouter.get('/:id', (request, response,next) => {
    Blog
      .findById(request.params.id)
      .then(blogs => {
        response.json(blogs)
      })
    .catch(error=>next(error))
  })
  
  
blogRouter.post('/', (request, response, next) => {
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

  module.exports = blogRouter