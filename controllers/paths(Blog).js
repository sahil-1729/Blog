const blogRouter = require('express').Router()
const blog = require('../models/blog')
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
  
    const result = await Blog.findByIdAndDelete(request.params.id)
    if(result){
      logger.info(`delete success`, result)
      response.status(204).end()
    }else{
      response.status(400).json({error : "The blog does not exist"})
    }
})

blogRouter.put('/:id',async (request,response,next) => {
  const body = request.body
  logger.info(body)
  const decoy = {
      title : body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      id: body.id
  }
  
  const result = await Blog.findByIdAndUpdate(request.params.id,decoy,{ new : true })
  response.status(200).json(result)

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