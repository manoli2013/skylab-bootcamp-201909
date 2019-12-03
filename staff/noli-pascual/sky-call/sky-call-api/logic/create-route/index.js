const { validate, errors: { ConflictError } } = require('sky-call-util')
const { models: { Route} } = require('sky-call-data')

module.exports = function (idAdmin, location) {
 
    validate.string(idAdmin)
    validate.string.notVoid('idAdmin', idAdmin)
    
    validate.ObjectId(location)
    validate.string.notVoid('idAdmin',location)

    return (async () => {

        const user = await user.findById(idAdmin)
        if(!user) throw new NotFoundError(`user with id ${idAdmin} not found`)

        let route = await Route.findOne({location})
        if(route) throw new ConflictError(`route with location ${location} already exists`)
       
        route = await Route.create({ user: idAdmin, location})

        

    })()
}
