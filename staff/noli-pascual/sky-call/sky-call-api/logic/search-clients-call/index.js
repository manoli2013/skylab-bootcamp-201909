const { validate, errors: { NotFoundError, ContentError } } = require('sky-call-util')
const { ObjectId, models: { Client, User, Call } } = require('sky-call-data')

module.exports = function (idUser, status) {
    validate.string(idUser)
    validate.string.notVoid('idUser', idUser)
    //validación de Mongo
    if (!ObjectId.isValid(idUser)) throw new ContentError(`${idUser} is not a valid id`)

    validate.string(status)
    validate.string.notVoid('status', status)

    return (async () => {
        

        const user = await User.findById(idUser)
        if (!user) throw new NotFoundError(`user with id ${idUser} not found`)

        const calls = await Call.find({ statusCall: status })

        if (calls.length === 0) throw new NotFoundError(`No clients by status ${status}`)

        const clientIds = []

        calls.map(call => clientIds.push(call.client))

        const clients = Client.find({"_id": { $in: clientIds }})
        
        // const clients = Client.find() 
        
        return clients
    })()
}
