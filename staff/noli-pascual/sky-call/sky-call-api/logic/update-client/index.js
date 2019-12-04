const { validate, errors: { NotFoundError, ContentError } } = require('sky-call-util')
const { ObjectId, models: { Client, User } } = require('sky-call-data')

module.exports = function (idUser, idClient, nameClient, surnameClient, tel, location, address) {

    validate.string(idUser)
    validate.string.notVoid('idClient', idUser)
    //validación de Mongo
    if (!ObjectId.isValid(idUser)) throw new ContentError(`${idUsert} is not a valid id`)

    validate.string(idClient)
    validate.string.notVoid('idClient', idClient)
    //validación de Mongo
    if (!ObjectId.isValid(idClient)) throw new ContentError(`${idClient} is not a valid id`)

 

    // if (name) {
    //     validate.string(name)
    //     validate.string.notVoid('name', name)
    // }

    // if (surname) {
    //     validate.string(surname)
    //     validate.string.notVoid('surname', surname)
    // }

    // if (tel) {
    //     validate.string(tel)
    //     validate.string.notVoid('tel', tel)
    // }

    // if (address) {
    //     validate.string(address)
    //     validate.string.notVoid('address', address)
    // }

    return (async () => {debugger
        const user = await User.findById(idUser)

        if (!user) throw new NotFoundError(`user with id ${idUser} not found`)

        const client = await Client.findById(idClient)

        if (!client) throw new NotFoundError(`client with id ${idClient} not found`)

        if(nameClient) client.nameClient = nameClient
        if(surnameClient) client.surnameClient = surnameClient
        if(tel) client.tel = tel
        if(address) client.address = address
        if(location) client.location = location

        
        await client.save()

        return client
    })()
}
