const { validate, errors: { ConflictError } } = require('sky-call-util')
const { models: { User, Call } } = require('sky-call-data')

module.exports = function (idUser, idClient, idCall, statusCall) {

    validate.string(idUser)
    validate.string.notVoid('idUser', idUser)
    validate.string(idClient)
    validate.string.notVoid('idClient', idClient)
    validate.string(idCall)
    validate.string.notVoid('idClient', idCall)
    validate.string(statusCall)
    validate.string.notVoid('statusCall', statusCall)


    return (async () => {

        let user = await User.findById(idUser)

        if (!user) throw new ConflictError(`user with id ${idUser} does not exist`)

        let call = await Call.findById(idCall)
        if (!call) throw new ConflictError(`call with id ${idCall} does not exist`)

        const dateCreation = Math.round(call.created.getTime() / 1000)
        const dateFinish = new Date()
        const now = Math.round(dateFinish.getTime() / 1000)

        const difference = now - dateCreation

        //calling pasar a false
        call.calling = false
        call.finished = dateFinish
        call.statusCall = statusCall

        let mind = difference % (60 * 60);
        let minutes = Math.floor(difference / 60);
        var secd = mind % 60;
        var seconds = difference - minutes * 60;

        call.duration = (`${minutes} min : ${seconds} sec`)

       

        await call.save()

    })()
}

