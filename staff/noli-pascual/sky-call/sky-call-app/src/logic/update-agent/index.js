const { validate, errors: { NotFoundError, CredentialsError, ConflictError } } = require('sky-call-util')
const call = require('../../utils/call')
const API_URL = process.env.REACT_APP_API_URL

/**
/**
* Update Client
* 
* @param {string} token user

* @params {string} idUser, name, surname, username, password
* 
* @returns {Promise}
*/


module.exports = function (token, idUser, name, surname, username, password) {

    validate.string('token', token)
    validate.string.notVoid('token', token)

    validate.string(idUser)
    validate.string.notVoid('idUser', idUser)

    validate.string(name)
    validate.string.notVoid('name', name)

    validate.string(surname)
    validate.string.notVoid('surnameClient', surname)

    validate.string(username)
    validate.string.notVoid('username', username)

    validate.string(password)
    validate.string.notVoid('password', passwordn)


    return (async () => {
        const res = await call(`${API_URL}/users/${idUser}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, surname, username, password })
        })

        if (res.status === 200) return

        if (res.status === 401) throw new CredentialsError(JSON.parse(res.body).message)

        if (res.status === 404) throw new NotFoundError(JSON.parse(res.body).message)

        if (res.status === 409) throw new ConflictError(JSON.parse(res.body).message)

    })()
}