const { validate, errors: { NotFoundError, ConflictError } } = require('sky-call-util')
const call = require('../../utils/call')
const API_URL = process.env.REACT_APP_API_URL

/**
 * create visit
 * @params token
 * @returns {Promise}
 * 
 */

module.exports = function (token, idClient, dateVisit, statusVisit) {
    validate.string(token)
    validate.string.notVoid('token', token)

    validate.string(idClient)
    validate.string.notVoid('idClient', idClient)

    validate.string(dateVisit)
    validate.string.notVoid('dateVisit', dateVisit)

    validate.string(statusVisit)
    validate.string.notVoid('statusVisit', statusVisit)

    return (async () => {

        const res = await call(`${API_URL}/clients/${idClient}/visits`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify({ dateVisit, statusVisit })
            
        })

        if (res.status === 201){
            const visitId = JSON.parse(res.body)

            return visitId
        }

        if (res.status === 404) throw new NotFoundError(JSON.parse(res.body).message)

        if (res.status === 409) throw new ConflictError(JSON.parse(res.body).message)


        throw new Error(JSON.parse(res.body).message)

    })()
}