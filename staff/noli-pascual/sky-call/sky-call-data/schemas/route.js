const { Schema } = require('mongoose')

//ROUTE

module.exports = new Schema({

    location: {
        type: 'String',
        required: true
    }
  
    
})