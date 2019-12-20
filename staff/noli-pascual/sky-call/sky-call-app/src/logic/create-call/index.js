const { validate, errors: { NotFoundError, ConflictError } } = require('sky-call-util')
import call from '../../utils/call' //eslint-disable-line
const API_URL = process.env.REACT_APP_API_URL

/**
 * create call 
 * @params token
 * @returns {Promise}
 * 
 */

// module.exports = function (token, idClient) {
    export default function (token, idClient) {
    validate.string(token)
    validate.string.notVoid('token', token)

    validate.string(idClient)
    validate.string.notVoid('idClient', idClient)

    return (async () => {

        const res = await call(`${API_URL}/clients/${idClient}/calls`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify({idClient})
        })

        if (res.status === 200){
            const callId = JSON.parse(res.body)

            return callId
        }

        if (res.status === 404) throw new NotFoundError(JSON.parse(res.body).message)

        if (res.status === 409) throw new ConflictError(JSON.parse(res.body).message)


        throw new Error(JSON.parse(res.body).message)

    })()
}