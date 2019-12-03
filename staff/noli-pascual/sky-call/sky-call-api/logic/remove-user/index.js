const { validate, errors: { NotFoundError, ContentError } } = require('sky-call-util')
const { ObjectId, models: { User } } = require('sky-call-data')

module.exports = function (idAdmin, idUser) {
    validate.string(idUser)
    validate.string.notVoid('idUser', idUser)
    if (!ObjectId.isValid(idUser)) throw new ContentError(`${idUser} is not a valid id`)

    validate.string(idAdmin)
    validate.string.notVoid('idAdmin', idAdmin)
    if (!ObjectId.isValid(idAdmin)) throw new ContentError(`${idAdmin} is not a valid id`)

    return (async () => {
        const user = await User.findById(idUser)
        const admin = await User.findById(idAdmin)

        if (!user) throw new NotFoundError(`user with id ${idAdmin} not found`)
        
        if(admin.role === 'admin')

        await User.deleteOne({ id: idUser })
        
        
        else {
            throw new ConflictError(`user with id ${idUser} has no permission`)
        }
        
    })()
}