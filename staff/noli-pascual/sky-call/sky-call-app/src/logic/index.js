module.exports = {
    authenticateUser: require('./authenticate-user'),
    registerUser: require('./register-user'),
    retrieveUser: require('./retrieve-user'),
    
    //Agent
    
    listClientsRoute: require('./list-clients-route'),
    retrieveClient: require('./retrieve-client'),
    updateClient: require('./update-client'),

    createCall: require('./create-call'),
    stopCall: require('./stop-call'),

    createVisit: require('./create-visit'),
    //TODO updatevisit
    
    //Admin
    createClient: require('./create-client'),
    agentsReport: require('./agents-report'),
    callsReport: require('./calls-report'),
    generalReport: require('./general-report'),

    // updateAgent: require('./update-agent')
    // retrieveUsers: require('./retrieve-users'),

}