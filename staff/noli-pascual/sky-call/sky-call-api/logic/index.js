module.exports = {

    //General
    authenticateUser: require('./authenticate-user'),
    registerUser: require('./register-user'),
    retrieveUser: require('./retrieve-user'),
    
    //admin
    
    retrieveUsers: require('./retrieve-users'),
    retrieveCalls: require('./retrieve-calls'),
    retrieveVisits: require('./retrieve-visits'),
    createClient: require('./create-client'),
    listAgents: require('./list-agents'),
    createRoute: require('./create-route'),
    adminReport: require('./admin-report'),
    listCallsAdmin: require('./list-calls-admin'),
    updateUser: require('./update-user'),
    
    
    //Agent
    retrieveClients: require('./retrieve-clients'),
    retrieveClient: require('./retrieve-client'),
    updateClient: require('./update-client'),

    listClientsRoute: require('./list-clients-route'),
    listClientsStatus: require('./list-clients-status'),

    
    listVisits: require('./list-visits-client'),
    listCallsClient: require('./list-calls-client'),
    
    
    createCall: require('./create-call'),
    updateCall: require('./update-call'),
    stopCall: require('./stop-call'),
    
    createVisit: require('./create-visit'),
    updateVisit: require('./update-visit'),
    
    
    uploadImageUser: require('./upload-image-user'),
    loadImageUser: require('./load-image-user'),
    //Búsqueda de clientes
    listClientsRoute: require('./list-clients-route'),
    listClientsStatus: require('./list-clients-status'),
}