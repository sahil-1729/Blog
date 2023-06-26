//create the schema of the database
const { transform } = require('lodash')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    password: String,
    blogs : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Blog'   
    }]
  })

  userSchema.set('toJSON',{
    // virtuals : true,
    transform: (document,returnedObj) => {
    returnedObj._id = returnedObj._id.toString()
    returnedObj.id = returnedObj._id
    
    delete returnedObj._id
    delete returnedObj.__v
    delete returnedObj.passwordHash
}
  })
  module.exports = mongoose.model('User',userSchema)