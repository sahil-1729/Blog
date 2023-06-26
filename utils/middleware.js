//Conatins the errorhandling and unknown endpoints
const logger = require('./logger')


const errorHandler = (error,request,response,next) => {
      logger.error(error.message)
      if(error.name === 'CastError'){
        response.status(400).json({ error : 'malformated id'})
      } 
      else if(error.name === 'ValidationError'){
        response.status(400).json({error : error.message})
      }
      next(error)
    }
    const unknown = (request,response) => {
      response.status(400).json({ error : `Page not found`})
    }

module.exports = {
    errorHandler,
    unknown
}