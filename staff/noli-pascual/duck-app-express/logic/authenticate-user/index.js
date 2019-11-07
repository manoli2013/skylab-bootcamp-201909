const call = require('../../helpers/call')
const {ContentError} = require('../../utils/errors')

module.exports = function (email, password, callback) {
    //TODO validate
    if (typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if (!email.trim().length) throw new ContentError('e-mail is empty or blank')
    if (typeof password !== 'string') throw new TypeError(password + ' is not a string')
    if (!password.trim().length) throw new ContentError('password is empty or blank')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    return new Promise((resolve, reject) => {

        call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/auth', { username: email, password }, result => {
            result.error ? reject(new Error(result.error)) : resolve() //pq no ponemos datos dentro?
        })
    })
}
