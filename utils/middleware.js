//Conatins the errorhandling and unknown endpoints
const logger = require('./utils/logger')


const errorHandler = (error,request,response,next) => {
      logger.error(error.message)
      if(error.name === 'CastError'){
        response.status(400).json({ error : 'malformated id'})
      }
      next(error)
    }
    const unknown = (request,response) => {
      response.status(404).json({ error : `Page not found`})
    }

module.exports = {
    errorHandler,
    unknown
}