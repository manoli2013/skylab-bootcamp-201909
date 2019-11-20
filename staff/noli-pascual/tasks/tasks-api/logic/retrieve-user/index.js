const validate = require('../../utils/validate')
// const database = require('../../utils/database')
const { NotFoundError } = require('../../utils/errors')
const { models: { User } } = require('../../data')
const { ObjectId } = require('mongodb')


module.exports = function (id) {
    validate.string(id)
    validate.string.notVoid('id', id)
    if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`)

    return User.findById( id )
        .then(user => {debugger
            if (!user) throw new NotFoundError(`user with id ${id} not found`)

            user.lastAccess = new Date

            return user.save()
            
        })
        .then( user => {
            console.log(user)
            user = user.toObject()
            console.log(user)
            
            //sanitation
            user.id = user._id.toString()
            delete user._id
            //seguridad
            delete user.password

            return user
        })

}

// module.exports = function (id) {
//     validate.string(id)
//     validate.string.notVoid('id', id)
//     if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`)

//     return User.findById(id)
//         .then(user => {
//             if (!user) throw new NotFoundError(`user with id ${id} not found`)

//             user.lastAccess = new Date

//             return user.save()
//         })
//         .then(user => {
//             user = user.toObject()

//             user.id = user._id.toString()
//             delete user._id

//             delete user.password

//             return user
//         })
// }