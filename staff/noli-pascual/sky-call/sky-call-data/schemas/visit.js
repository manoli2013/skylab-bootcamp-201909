const { Schema } = require('mongoose')
const { SchemaTypes: { ObjectId } } = require('mongoose')

//VISIT

module.exports = new Schema({

    agent: {
        type: ObjectId,
        ref: 'Agent'
    },

    client: {
        type: ObjectId,
        ref: 'Client'
    },
    
    dateRegister: {
        type: Date,
        default: new Date()
    },

    dateVisit: {
        type: Date,
       
    },

    statusVisit: {
        type: String,
        enum: ['OK', 'NO', 'PDTE'],
        required: true,
        default: 'PDTE'
    }

})