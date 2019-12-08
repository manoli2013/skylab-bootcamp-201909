const { validate, errors: { NotFoundError, ContentError } } = require('sky-call-util')
const { ObjectId, models: { Call, User, Visit } } = require('sky-call-data')

module.exports = function (idUser, idClient, idVisit, dateVisit, statusVisit) {

    validate.string(idUser)
    validate.string.notVoid('idUser', idUser)
   
    if (!ObjectId.isValid(idUser)) throw new ContentError(`${idUser} is not a valid id`)
    
    validate.string(idVisit)
    validate.string.notVoid('idVvisit', idVisit)
   
    if (!ObjectId.isValid(idVisit)) throw new ContentError(`${idVisit} is not a valid id`)
   
   
    if (dateVisit) {
        validate.string(dateVisit)
        validate.string.notVoid('dateVisit', dateVisit)
    }
    if (statusVisit) {
        validate.string(statusVisit)
        validate.string.notVoid('statusVisit', statusVisit)
    }

    return (async () => {
        const user = await User.findById(idUser)

        if (!user) throw new NotFoundError(`user with id ${idUser} not found`)

        const visit = await Visit.findById(idVisit)

        if(dateVisit) visit.dateVisit = dateVisit
        if(statusVisit) visit.statusVisit = statusVisit

        await Visit.updateOne({_id: ObjectId(idVisit), client: idClient}, {$set: {dateVisit, statusVisit} })

    })()
}
