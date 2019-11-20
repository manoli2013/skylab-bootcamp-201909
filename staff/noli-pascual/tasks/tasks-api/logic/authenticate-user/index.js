const validate = require('../../utils/validate')
const { CredentialsError } = require('../../utils/errors')
const { models: { User } } = require('../../data')


module.exports = function (username, password) {
    validate.string(username)
    validate.string.notVoid('username', username)
    validate.string(password)
    validate.string.notVoid('password', password)


    return User.findOne({ username, password })
        .then(user => {debugger
            if (!user) throw new CredentialsError('wrong credentials')

            // const { _id } = user
            user.lastAccess = new Date

            return user.save()
            .then( () => id = user.id )
            
        })

}