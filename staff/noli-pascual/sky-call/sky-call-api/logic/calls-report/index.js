const { validate, errors: { NotFoundError, ContentError, ConflictError } } = require('sky-call-util')
const { ObjectId, models: { User, Call } } = require('sky-call-data')

module.exports = function (idAdmin) {
    
    validate.string(idAdmin)
    validate.string.notVoid('idAdmin', idAdmin)
    //validación de Mongo
    if (!ObjectId.isValid(idAdmin)) throw new ContentError(`${idAdmin} is not a valid id`)

    return (async () => {

        let user = await User.findById(idAdmin)

        if (!user) throw new NotFoundError(`user with id ${idAdmin} not found`)

        if (user.role === 'agent') throw new ConflictError(`this user ${id} has no permission`)

        const calls = await Call.find().sort({create: 'asc'})

        return calls

    })()
}
