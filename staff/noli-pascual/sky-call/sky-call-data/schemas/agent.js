const { Schema, ObjectId} = require('mongoose')
// const { SchemaTypes: { ObjectId } } = mongoose

//AGENT 

module.exports = new Schema({
    
    //NO HACE FALTA
    // callIds: [{
    //     type: ObjectId,
    //     ref: 'Call'
    // }],

    //NO HACE FALTA
    // visits: [{
    //     type: ObjectId,
    //     ref: 'Visit'
    // }],

    pendingVisits: {
        type: Array
    },
    
    successVisits: {
        type: Array
    },

    failVisits: {
        type: Array
    }
})