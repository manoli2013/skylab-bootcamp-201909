const { validate, errors: { NotFoundError, ContentError } } = require('sky-call-util')
const { ObjectId, models: { Client, User, Call} } = require('sky-call-data')

module.exports = function (idUser, idClient, idCall) {
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
        
        const clientFiltered = await Client.findById(idClient)

        if(!clientFiltered) throw new NotFoundError(`client with id ${idClient} not found`)

        const call = await Call.findById(idCall)


        if(!call) throw new NotFoundError(`call with id ${idCall} not found`)
        
        const { id, agent, client, created, statusCall } = call

        return { id, agent, client, created, statusCall }
        

    })()
}

