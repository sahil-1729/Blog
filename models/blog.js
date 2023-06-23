//create the schema of the database
const { transform } = require('lodash')
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })

  blogSchema.set('toJSON',{
    // virtuals : true,
    transform: (document,returnedObj) => {
    returnedObj._id = returnedObj._id.toString()
    //create a new peroperty and assign the id to it
    returnedObj.id = returnedObj._id
    delete returnedObj._id
    delete returnedObj.__v
    return returnedObj
    }
  })
  module.exports = mongoose.model('Blog',blogSchema)