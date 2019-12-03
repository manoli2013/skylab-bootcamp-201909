const { validate, errors: { ConflictError } } = require('sky-call-util')
const { models: { User, Client, Route } } = require('sky-call-data')

module.exports = function (idAdmin, nameClient, surnameClient, tel, location, address) {

    validate.string(nameClient)
    validate.string.notVoid('nameClient', nameClient)
    validate.string(surnameClient)
    validate.string.notVoid('surnameClient', surnameClient)
    validate.string(tel)
    validate.string.notVoid('tel', tel)

    validate.string(address)
    validate.string.notVoid('address', address)



    return (async () => {
        debugger
        let user = await User.findById(idAdmin)

        if (!user) throw new ConflictError(`user with id ${idAdmin} does not exist`)

        const route = await Route.findOne({ user: idAdmin })

        if (user.role === 'admin') {

            const client = await Client.create({ creator: idAdmin, nameClient, surnameClient, tel, location: route.id, address, callIds: [], visits: [], isActive: true })
            return client.id
        }


        return client.id

    })()
}
