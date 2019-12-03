const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')

//ROUTE

module.exports = new Schema({

    user: {
        type: ObjectId,
        ref: 'User'
    },
    location: {
        type: String,
        required: true
    },

    statusRoute: {
        type: String,
        enum: ['active', 'pasive'],
        default: 'pasive'
    }
  
    
})