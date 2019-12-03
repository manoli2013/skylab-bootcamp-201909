const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')
//CALL

module.exports = new Schema({

    agent: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    client: {
        type: ObjectId,
        ref: 'Client'
    },

    created: {
        type: Date,
        default: new Date()
    },

    statusCall: {
        type: String,
        enum: ['A', 'N.A', 'O.S'],
        
    },

    calling: {
        type: Boolean,
        default: false
    },

    finished: {
        type: Date
    },

    duration: {
        type: String
    }
    
})