const { validate, errors: { NotFoundError, ContentError } } = require('sky-call-util')
const { ObjectId, models: { Client, User, Call, Visit} } = require('sky-call-data')

module.exports = function (idUser, idClient) {
    validate.string(idUser)
    validate.string.notVoid('idUser', idUser)
    //validación de Mongo
    if (!ObjectId.isValid(idUser)) throw new ContentError(`${idUser} is not a valid id`)

    validate.string(idClient)
    validate.string.notVoid('idClient', idClient)
    //validación de Mongo
    if (!ObjectId.isValid(idClient)) throw new ContentError(`${idClient} is not a valid id`)

    return (async () => {

        let user = await User.findById(idUser)
        if (!user) throw new NotFoundError(`user with id ${idUser} does not exist`)
        
        const client = await Client.findById(idClient)

        if(!client) throw new NotFoundError(`client with id ${idClient} not found`)

        let callsClient = await Call.find({client: idClient})

        const visitsClient = await Visit.find({client: idClient})
        
        const { id, nameClient, surnameClient, tel, location, address} = client

        return { id, nameClient, surnameClient, tel, location, address, callsClient, visitsClient }
        

    })()
}

