const { model } = require('mongoose')
const { user, agent, route, client, call, visit} = require('./schemas')

//docu models

module.exports = {
    User: model('User', user),
    
    Agent: model('Agent', agent),
    Route: model('Route', route), //es necesario?
    Client: model('Client', client),
    Call: model('Call', call),
    Visit: model('Visit', visit)
}