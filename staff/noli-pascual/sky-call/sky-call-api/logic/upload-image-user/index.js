require('dotenv').config()
const { validate, errors: { NotFoundError, ContentError }  } = require('sky-call-util')
const { ObjectId, models: { User } } = require('sky-call-data')
const fs = require('fs')
const path = require('path')
/**
* Uploads image in profile user
*
* @param {ObjectId} id of user
* @param {Stream} file data of the image
* @param {Sting} filename name of the image
*
* @returns {Promise} - user.
*/
module.exports = function (id, idUser, file, filename) {

    validate.string(id)
    validate.string.notVoid('id', id)
    if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`)

    validate.string(idUser)
    validate.string.notVoid('idUser', idUser)
    if (!ObjectId.isValid(id)) throw new ContentError(`${idUser} is not a valid id`)

    return (async () => {
        const admin = await User.findById(id)
        if (!admin) throw new NotFoundError(`user with id ${id} not found`)

        const agent = await User.findById(idUser)
        if (!agent) throw new NotFoundError(`user with id ${idUser} not found`)

        if(admin.role === 'admin') {

            const dir = `./data/users/${id}/profile/${idUser}`
    
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir, {recursive: true}, err => {})
            }
            let saveTo = path.join(__dirname, `../../data/users/${id}/profile/${idUser}/${filename}.png`)
            return file.pipe(fs.createWriteStream(saveTo))
        }

    })()
}