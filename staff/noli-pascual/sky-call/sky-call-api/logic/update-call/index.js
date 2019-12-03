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

    return (async () => {debugger
        const user = await User.findById(idUser)

        if (!user) throw new NotFoundError(`user with id ${idUser} not found`)

        const call = await Call.findById(idCall)
        if(!call) throw new NotFoundError(`call with id ${idCall} not found`)
        
        if(statusCall) call.statusCall = statusCall
       
        await call.save()

        return call
    })()
}
