const { validate, errors: { ConflictError } } = require('sky-call-util')
const { models: { User, Client } } = require('sky-call-data')

module.exports = 
/**
 * Create client 
 * 
 * @param {*} idAdmin 
 * @param {*} nameClient 
 * @param {*} surnameClient 
 * @param {*} tel 
 * @param {*} location 
 * @param {*} address 
 */
function (idAdmin, nameClient, surnameClient, tel, location, address) {

    validate.string(nameClient)
    validate.string.notVoid('nameClient', nameClient)
    validate.string(surnameClient)
    validate.string.notVoid('surnameClient', surnameClient)
    validate.string(tel)
    validate.string.notVoid('tel', tel)
    validate.string(location)
    validate.string.notVoid('location', location)
    validate.string(address)
    validate.string.notVoid('address', address)


    return (async () => {
        
        let user = await User.findById(idAdmin)

        if (!user) throw new ConflictError(`user with id ${idAdmin} does not exist`)


        const client = await Client.create({ creator: idAdmin, nameClient, surnameClient, tel, location, address, callIds: [], visits: [], isActive: true })
        
        return client.id

    })()
}
