const { validate, errors: { NotFoundError, ContentError } } = require('sky-call-util')
const { ObjectId, models: { Client, User } } = require('sky-call-data')

/**
* Update Client
* 
* @param {string} id user
* @param {string} idClient
* @params {string} idClient, nameClient, surnameClient, tel, location, address
* 
* @returns {Promise}
*/

module.exports = function (idUser, idClient, nameClient, surnameClient, tel, location, address) {

    validate.string(idUser)
    validate.string.notVoid('idClient', idUser)
    //validación de Mongo
    if (!ObjectId.isValid(idUser)) throw new ContentError(`${idUsert} is not a valid id`)

    validate.string(idClient)
    validate.string.notVoid('idClient', idClient)
    //validación de Mongo
    if (!ObjectId.isValid(idClient)) throw new ContentError(`${idClient} is not a valid id`)

    
    if (nameClient) {
        validate.string(nameClient)
        validate.string.notVoid('nameClient', nameClient)
    }

    if (surnameClient) {
        validate.string(surnameClient)
        validate.string.notVoid('surnameClient', surnameClient)
    }

    if (tel) {
        validate.string(tel)
        validate.string.notVoid('tel', tel)
    }

    if (location) {
        validate.string(location)
        validate.string.notVoid('location', location)
    }

    if (address) {
        validate.string(address)
        validate.string.notVoid('address', address)
    }
   
    return (async () => {
        const user = await User.findById(idUser)

        if (!user) throw new NotFoundError(`user with id ${idUser} not found`)

        const client = await Client.findById(idClient)

        if (!client) throw new NotFoundError(`client with id ${idClient} not found`)

        const modifications = {}

        // if(nameClient !== "") {modifications.nameClient = nameClient} else {nameClient = undefined}
        // if(surnameClient !== "") {modifications.surnameClient = surameClient} else {surnameClient = undefined}
        // if(tel !== "") {modifications.tel = tel}  else {tel = undefined}
        // if(location !== "") {modifications.location = location} else {location = undefined}
        // if(address !== "") {modifications.address = address} else {address = undefined}

        // await client.save()

        nameClient && (modifications.nameClient = nameClient)
        surnameClient && (modifications.surnameClient = surnameClient)
        tel && (modifications.tel = tel)
        address && (modifications.address = address)
        location && (modifications.location = location)
        address && (modifications.address = address)
        
        await Client.updateOne({_id: ObjectId(idClient)}, {$set: modifications})

        
    })()
}
