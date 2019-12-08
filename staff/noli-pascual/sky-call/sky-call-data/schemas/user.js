const { Schema } = require('mongoose')
const Agent = require('./agent')
//USER 

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    
    role: {
        type: String,
        required: true,
        enum: ['admin', 'agent'],
        default: 'agent'
    },

    profile: Agent
    
})