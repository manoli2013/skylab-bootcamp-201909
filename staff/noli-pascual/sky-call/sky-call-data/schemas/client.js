const { Schema, ObjectId } = require('mongoose')

//CLIENT

module.exports = new Schema({

    creator: {
        type: ObjectId,
        ref: 'User'
    }, 

    nameClient: {
        type: String,
        required: true
    },
    
    surnameClient: {
        type: String,
        required: true
    },
    
    tel: {
        type: String,
        required: true
    },

    location: { type: ObjectId, ref: 'Route', required: true},

    address: { type: String, required: true },

    callIds: {
        type: Array,
    },

    visits: {
        type: Array,
   
    },

    isActive: {
        type: Boolean,
        default: true
    }
    
})