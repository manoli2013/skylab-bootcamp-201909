const { Schema, SchemaTypes: { ObjectId } } = mongoose
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
        default: Date.now,
        required: true
    },

    finished: {
        
        type: Date,
        default: false,
        
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