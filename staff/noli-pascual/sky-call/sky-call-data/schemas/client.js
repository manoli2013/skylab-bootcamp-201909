const { Schema } = require('mongoose')
const { SchemaTypes: { ObjectId } } = mongoose


//CLIENT

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    
    surname2: {
        type: String,
        required: true,
    },
    
    tel: {
        type: String,
        required: true
    },

    location: { type: ObjectId, ref: 'Route' },

    address: {
        type: String,
        required: true
    },

    callIds: [{
        type: ObjectId,
        ref: 'Call'
    }],

    visits: [{
        type: ObjectId,
        ref: 'Visit'
    }],
    
})