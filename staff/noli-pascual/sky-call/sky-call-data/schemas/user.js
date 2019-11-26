const { Schema } = require('mongoose')

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
        type:String,
        required: true,
        enum: ['admin', 'agent'],
        default: 'admin'
    },

    profile: Object
    
})