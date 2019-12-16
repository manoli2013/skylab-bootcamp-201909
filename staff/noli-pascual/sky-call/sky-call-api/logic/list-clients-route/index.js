const { validate, errors: { NotFoundError, ContentError, ConflictError } } = require('sky-call-util')
const { ObjectId, models: { Client, User} } = require('sky-call-data')

module.exports = function (idUser, location) {
    validate.string(idUser)
    validate.string.notVoid('idUser', idUser)
    
    validate.string(location)
    validate.string.notVoid('location', location)
    //validación de Mongo
    if (!ObjectId.isValid(idUser)) throw new ContentError(`${idUser} is not a valid id`)

    return (async () => {

        let user = await User.findById(idUser)
        if (!user) throw new NotFoundError(`user with id ${idUser} does not exist`)

        const clients = await Client.find({location})

        if(clients.length === 0) throw new NotFoundError(`No clients in location ${location}`)
        
        //extraer clientes
        const clientsList = []
        

        clients.forEach(client => {
            const { id, nameClient, surnameClient, tel, location, address, isActive } = client

            clientsList.push({id, nameClient, surnameClient, tel, location, address, isActive })
        })
        
        return clientsList

    })()
}
