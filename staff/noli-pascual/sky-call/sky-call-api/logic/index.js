module.exports = {

    //General
    authenticateUser: require('./authenticate-user'),
    registerUser: require('./register-user'),
    retrieveUser: require('./retrieve-user'),
    
    //admin
    createClient: require('./create-client'),
    agentsReport: require('./agents-report'),
    callsReport: require('./calls-report'),
    generalReport: require('./general-report'),
    
   
       
    uploadImageUser: require('./upload-image-user'),
    loadImageUser: require('./load-image-user'),
    
    
    //Agent
    
    //Búsqueda de clientes
    listClientsRoute: require('./list-clients-route'),
    retrieveClient: require('./retrieve-client'),
    updateClient: require('./update-client'),
    
    createCall: require('./create-call'),
    stopCall: require('./stop-call'),

    createVisit: require('./create-visit'),
    // listClientsStatus: require('./list-clients-status'),

    
    
}