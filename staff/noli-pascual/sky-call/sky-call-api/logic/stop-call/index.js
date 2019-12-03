const { validate, errors: { ConflictError } } = require('sky-call-util')
const { models: { User, Call } } = require('sky-call-data')

module.exports = function (idUser, idCall) {

    validate.string(idUser)
    validate.string.notVoid('idUser', idUser)
    validate.string(idCall)
    validate.string.notVoid('idClient', idCall)


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

        let mind = difference % (60 * 60);
        let minutes = Math.floor(difference / 60);
        var secd = mind % 60;
        var seconds = difference - minutes * 60;

        call.duration = (`${minutes} min : ${seconds} sec`)

        //TO DO
        // const convertDate = function (date) {
        //     const year = date.getFullYear();
        //     month = date.getMonth() + 1;
        //     dt = date.getDate();

        //     if (dt < 10) {
        //         dt = '0' + dt;
        //     }
        //     if (month < 10) {
        //         month = '0' + month;
        //     }
            
        //     return (year + '-' + month + '-' + dt);

        // }
        // dateCreation = convertDate(dateCreation)

        await call.save()

    })()
}

