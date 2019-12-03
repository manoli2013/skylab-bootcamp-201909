const { validate, errors: { NotFoundError, ContentError } } = require('sky-call-util')
const { ObjectId, models: { Client, User, Route} } = require('sky-call-data')

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
        
        const client = await Client.findById(idClient)
        let locationId = client.location

        const route = await Route.findById(locationId)

        const routeName = route.location

        if(!client) throw new NotFoundError(`client with id ${idClient} not found`)
        location = route.location
        
        const { id, nameClient, surnameClient, tel, address } = client.toObject()

        return { id, nameClient, surnameClient, tel, address, routeName }
        

    })()
}

