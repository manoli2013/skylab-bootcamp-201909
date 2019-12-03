const { validate, errors: { ConflictError } } = require('sky-call-util')
const { models: { Route, User} } = require('sky-call-data')

module.exports = function (idAdmin, location, statusRoute) {
 
    validate.string(idAdmin)
    validate.string.notVoid('idAdmin', idAdmin)
    

    return (async () => {

        const user = await User.findById(idAdmin)
        if(!user) throw new NotFoundError(`user with id ${idAdmin} not found`)

        let route = await Route.findOne({location})
        if(route) throw new ConflictError(`route with location ${location} already exists`)
       
        route = await Route.create({ user: idAdmin, location,statusRoute})

        return route.id

    })()
}
