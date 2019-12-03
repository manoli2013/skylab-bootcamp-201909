const { validate, errors: { NotFoundError, ContentError } } = require('sky-call-util')
const { ObjectId, models: { Visit} } = require('sky-call-data')

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
        
        const visits = await Visit.find({client: idClient}).sort({dateVisit: 'asc'})

        if(visits.length === 0) throw new NotFoundError(`No visits for client ${idClient}`)
        
        return visits

    })()
}
