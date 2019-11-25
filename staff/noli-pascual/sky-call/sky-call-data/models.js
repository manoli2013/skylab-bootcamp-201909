const { model } = require('mongoose')
const { user, admin, agent, route, client, call, visit} = require('./schemas')

//docu models

module.exports = {
    User: model('User', user),
    Admin: model('Admin', admin),
    Agent: model('Agent', agent),
    Route: model('Route', route), //es necesario?
    Client: model('Client', client),
    Call: model('Call', call),
    Visit: model('Visit', visit)
}