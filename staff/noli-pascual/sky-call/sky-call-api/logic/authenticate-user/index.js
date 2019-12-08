const { validate, errors: { CredentialsError } } = require('sky-call-util')
const { models: { User } } = require('sky-call-data')

module.exports = function (username, password) {

    validate.string(username)
    validate.string.notVoid('username', username)
    validate.string(password)
    validate.string.notVoid('password', password)

    return (async () => {
        console.log(username)
        const user = await User.findOne({ username, password })
        
        if (!user) throw new CredentialsError('wrong credentials')

        

        await user.save()

        return user.id
    })()
}