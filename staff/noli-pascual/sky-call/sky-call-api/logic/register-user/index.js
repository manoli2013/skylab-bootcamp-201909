const { validate, errors: { ConflictError } } = require('sky-call-util')
const { models: { User, Agent } } = require('sky-call-data')

module.exports = function (name, surname, username, password, role) {
    
    validate.string(name)
    validate.string.notVoid('name', name)
    validate.string(surname)
    validate.string.notVoid('surname', surname)
    validate.string(username)
    validate.string.notVoid('username', username)
    validate.string(password)
    validate.string.notVoid('password', password)
    validate.string(role)
    validate.string.notVoid('role', role)

    return (async () => {
        let user = await User.findOne({ username })

        if (user) throw new ConflictError(`user with username ${username} already exists`)

        user = await User.create({ name, surname, username, password, role })

        if (role === 'agent') user.profile = new Agent()

        user.save()
    })()
}
