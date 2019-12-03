const { validate, errors: { NotFoundError, ContentError, ConflictError } } = require('sky-call-util')
const { ObjectId, models: { Client, User, Call} } = require('sky-call-data')

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

        let client = await Client.findById(idClient)

        if (!client) throw new NotFoundError(`client with id ${idClient} not found`)

        let calls = await Call.find({client: client.id})

        return calls

    })()
}
