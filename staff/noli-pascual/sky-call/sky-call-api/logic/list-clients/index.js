const { validate, errors: { NotFoundError, ContentError, ConflictError } } = require('sky-call-util')
const { ObjectId, models: { Client, User, Route} } = require('sky-call-data')

module.exports = function (idUser, idRoute) {
    validate.string(idRoute)
    validate.string.notVoid('idRoute', idRoute)
    //validación de Mongo
    if (!ObjectId.isValid(idRoute)) throw new ContentError(`${idRoute} is not a valid id`)

    return (async () => {

        let user = await User.findById(idUser)
        if (!user) throw new NotFoundError(`user with id ${idUser} does not exist`)


        let activeRoute = await Route.findById(idRoute)
       
        if(!activeRoute) throw new NotFoundError(`route with id ${idRoute} not found`)
        
        activeRoute.statusRoute = 'active'

        activeRoute.save()

        const clients = await Client.find({location: idRoute})

        if(clients.length === 0) throw new NotFoundError(`No clients in route ${idRoute}`)
        
        //extraer clientes
        const clientsList = []

        clients.forEach(client => {
            const { nameClient, surnameClient, tel, location, address, isActive } = client
            clientsList.push({nameClient, surnameClient, tel, location: activeRoute.location, address, isActive })
        })
        
       
        return clientsList

    })()
}
