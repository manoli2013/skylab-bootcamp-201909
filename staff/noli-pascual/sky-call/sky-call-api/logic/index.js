module.exports = {
    authenticateUser: require('./authenticate-user'),
    registerUser: require('./register-user'),
    retrieveUser: require('./retrieve-user'),
    removeUser: require('./remove-user'),
    updateUser: require('./update-user'),
    createClient: require('./create-client'),
    retrieveClient: require('./retrieve-client'),
    listClients: require('./list-clients'),

    createVisit: require('./create-visit'),
    updateVisit: require('./update-visit'),

    listAgents: require('./list-agents'),
    listVisits: require('./list-visits-client'),

    createRoute: require('./create-route'),
    removeClient: require('./remove-client'),
    updateClient: require('./update-client'),
    adminReport: require('./admin-report'),

    createCall: require('./create-call'),
    updateCall: require('./update-call'),
    stopCall: require('./stop-call'),

    listCallsAdmin: require('./list-calls-admin'),
    listCallsClient: require('./list-calls-client'),
    searchClients: require('./search-clients-call'),

    uploadImageUser: require('./upload-image-user'),
    loadImageUser: require('./load-image-user')
}