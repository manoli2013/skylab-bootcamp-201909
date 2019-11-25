const { Schema } = require('mongoose')
const { SchemaTypes: { ObjectId } } = mongoose

//AGENT 

module.exports = new Schema({
    callIds: [{
        type: ObjectId,
        ref: 'Call'
    }],

    visits: [{
        type: ObjectId,
        ref: 'Visit'
    }],

    failVisits: {
        type: Number,
        default: 0
    },
    sucessVisits: {
        type: Number,
        default: 0
    }
})