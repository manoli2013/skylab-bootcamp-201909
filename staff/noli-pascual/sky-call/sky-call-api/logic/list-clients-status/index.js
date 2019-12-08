const { validate, errors: { NotFoundError, ContentError, ConflictError } } = require('sky-call-util')
const { ObjectId, models: { Client, User, Route} } = require('sky-call-data')

module.exports = function (idUser, statusCall) {
    validate.string(statusCall)
    validate.string.notVoid('statusCall', statusCall)
    //validación de Mongo
    
    return (async () => {

        let user = await User.findById(idUser)
        if (!user) throw new NotFoundError(`user with id ${idUser} does not exist`)


        let calls = await Calls.find({statusCall})
        if(!calls) throw new NotFoundError(`no calls with status ${statusCall}`)
        
        const callIds = []
        calls.map(call => callIds.push(call.id))

        await Clients.find({ "_id": { $in: callIds }})
       
        // if(clients.length === 0) throw new NotFoundError(`No clients in route ${idRoute}`)
        
        //extraer clientes
        const clientsList = []

        clients.forEach(client => {
            const { _id = id, nameClient, surnameClient, tel, location, address, isActive } = client
            clientsList.push({id, nameClient, surnameClient, tel, location, address, isActive })
        })
        
       
        return clientsList

    })()
}
