const { validate, errors: { NotFoundError, ContentError, ConflictError } } = require('sky-call-util')
const { ObjectId, models: { User, Call} } = require('sky-call-data')

module.exports = function (id) {
    validate.string(id)
    validate.string.notVoid('id', id)
    if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`)

    return (async () => {
        const user = await User.findById(id)
        if (!user) throw new NotFoundError(`user with id ${id} not found`)
        if(!user.role === 'admin') throw new ConflictError(`no permissions for this user`)

        const calls = Call.find()
       return calls
    })()
}