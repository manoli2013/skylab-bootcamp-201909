const { validate, errors: { ConflictError } } = require('sky-call-util')
const { models: { User, Call, Client} } = require('sky-call-data')

module.exports = function (idUser, idClient) {

    validate.string(idUser)
    validate.string.notVoid('idUser', idUser)
    validate.string(idClient)
    validate.string.notVoid('idClient', idClient)
   

    return (async () => {

        let user = await User.findById(idUser)

        if (!user) throw new ConflictError(`user with id ${idUser} does not exist`)

        let client = await Client.findById(idClient)

        // cuando apretan a llamar, crear una llamada 

        const call = await Call.create( { agent: idUser, client: client.id, statusCall: 'N.A', calling: true } )

        return call.id

    })()
}