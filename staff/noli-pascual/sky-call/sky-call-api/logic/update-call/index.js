const { validate, errors: { NotFoundError, ContentError } } = require('sky-call-util')
const { ObjectId, models: { Call, User } } = require('sky-call-data')

module.exports = function (idUser, idClient, idCall, statusCall) {

    validate.string(idUser)
    validate.string.notVoid('idUser', idUser)
   
    if (!ObjectId.isValid(idUser)) throw new ContentError(`${idUser} is not a valid id`)
   
   
    if (statusCall) {
        validate.string(statusCall)
        validate.string.notVoid('statusCall', statusCall)
    }

    return (async () => {
        const user = await User.findById(idUser)

        if (!user) throw new NotFoundError(`user with id ${idUser} not found`)

        if(statusCall) 
        
        await Call.updateOne({_id: ObjectId(idCall), client: idClient}, {$set: {statusCall} })

    })()
}
