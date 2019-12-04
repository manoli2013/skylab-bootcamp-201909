const { validate, errors: { NotFoundError, ContentError } } = require('sky-call-util')
const { ObjectId, models: { Client, User, Visit} } = require('sky-call-data')

module.exports = function (idUser, idClient, idVisit) {
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

        const visit = await Visit.findById(idVisit)

        if(!visit) throw new NotFoundError(`visit with id ${idVisit} not found`)
        
        const { id, agent, client, created, dateVisit, statusVisit } = visit

        return { id, agent, client, created, dateVisit, statusVisit }
        

    })()
}

