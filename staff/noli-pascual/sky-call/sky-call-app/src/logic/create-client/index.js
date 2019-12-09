const { validate, errors: { NotFoundError, ConflictError } } = require('sky-call-util')
const call = require('../../utils/call')
const API_URL = process.env.REACT_APP_API_URL

/**
 * create client 
 * @params token
 * @returns {Promise}
 * 
 */

module.exports = function (token, nameClient, surnameClient, tel, location,address, callIds, visits) {
    validate.string(token)
    validate.string.notVoid('token', token)

    return (async () => {debugger

        const res = await call(`${API_URL}/clients/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`},
            body: JSON.stringify({nameClient, surnameClient, tel, location,address, callIds, visits})
        })

        if (res.status === 200){
            const clientId = JSON.parse(res.body)

            return clientId
        }

        if (res.status === 404) throw new NotFoundError(JSON.parse(res.body).message)

        if (res.status === 409) throw new ConflictError(JSON.parse(res.body).message)


        throw new Error(JSON.parse(res.body).message)

    })()
}