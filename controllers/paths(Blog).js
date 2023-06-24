const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const logger = require('../utils/logger')

blogRouter.get('/', async (request, response,next) => {
  const blog = await Blog.find({})  
  response.json(blog)
  // Blog
  //     .find({})
  //     .then(blogs => {
  //       response.json(blogs)
  //     })
  })

blogRouter.get('/:id', async (request, response,next) => {
  
  //eliminating try catch by using express-async-error packages
  // try{
    const blogs = await Blog.findById(request.params.id)
    response.json(blogs)
  // }catch(exception){
  //   next(exception)
  // }

  // Blog
  //     .findById(request.params.id)
  //     .then(blogs => {
  //       response.json(blogs)
  //     })
  //   .catch(error=>next(error))
  })
  
blogRouter.delete('/:id', async (request, response,next) => {
  
    await Blog.findByIdAndDelete(request.params.id)
    response.status(204).end()
    })
    

blogRouter.post('/', async (request, response, next) => {
    const body = request.body
    const blog = new Blog(body)
    logger.info(`Here's the result`,blog, typeof blog)
    if(blog.title === undefined){
      response.status(400).json({error : 'empty data'})
    }
    else{    
      try{
        // if(!blog.likes){
        //   blog.likes = 0
        // }
        const result = await blog.save()
        response.status(201).json(result)
      }catch(exception){
        next(exception)
      }
      
    //   blog
    // .save()
    // .then(result => {
    //   response.status(201).json(result)
    // })
    // .catch(error=>next(error))
    }
  })

  module.exports = blogRouter