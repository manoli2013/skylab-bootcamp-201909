const { validate, errors: { NotFoundError, CredentialsError, ConflictError } } = require('sky-call-util')
const call = require('../../utils/call')
const API_URL = process.env.REACT_APP_API_URL

/**
/**
* Update Client
* 
* @param {string} token user

* @params {string} idClient, nameClient, surnameClient, tel, location, address
* 
* @returns {Promise}
*/


module.exports = function (token, idClient, nameClient, surnameClient, tel, location, address) {

    validate.string('token', token)
    validate.string.notVoid('token', token)

    validate.string(idClient)
    validate.string.notVoid('idClient', idClient)

    if (nameClient) {
        validate.string(nameClient)
        validate.string.notVoid('nameClient', nameClient)
    }

    if (surnameClient) {
        validate.string(surnameClient)
        validate.string.notVoid('surnameClient', surnameClient)
    }

    if (tel) {
        validate.string(tel)
        validate.string.notVoid('tel', tel)
    }

    if (location) {
        validate.string(location)
        validate.string.notVoid('location', location)
    }

    if (address) {
        validate.string(address)
        validate.string.notVoid('address', address)
    }
    
    return (async () => {
        const res = await call(`${API_URL}/clients/${idClient}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nameClient, surnameClient, tel, location, address })
        })

        if (res.status === 200) return

        if (res.status === 401) throw new CredentialsError(JSON.parse(res.body).message)

        if (res.status === 404) throw new NotFoundError(JSON.parse(res.body).message)

        if (res.status === 409) throw new ConflictError(JSON.parse(res.body).message)

    })()
}