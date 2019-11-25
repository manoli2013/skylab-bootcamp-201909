const { Schema } = require('mongoose')
const { SchemaTypes: { ObjectId } } = mongoose

//VISIT

module.exports = new Schema({

    agent: {
        type: ObjectId,
        ref: 'User'
    },

    client: {
        type: ObjectId,
        ref: 'Client'
    },

    date: {
        type: Date,
        required: true
    },

    time: {
        //cómo especifico las horas
        type: Date,
        required: true

    },

    status: {
        type: String,
        enum: ['OK', 'NO', 'NC'],
        required: true
    },

    duration: {
  //cómo setear y calcular duración
    }
    
})