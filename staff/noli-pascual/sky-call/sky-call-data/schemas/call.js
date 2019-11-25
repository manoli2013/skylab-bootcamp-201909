const { Schema, SchemaTypes: { ObjectId } } = mongoose
//CALL

module.exports = new Schema({

    agent: {
        type: ObjectId,
        ref: 'User'
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