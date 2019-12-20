const { validate, errors: { NotFoundError, CredentialsError, ConflictError } } = require('sky-call-util')
import call from '../../utils/call' //eslint-disable-line
const API_URL = process.env.REACT_APP_API_URL

/**
 * stop call (and update statusCall) 
 * 
 * @param {string} token of user 

 * @param {String} idCall
 * @param {String} statusCall
  
 * 
 * @returns {Promise}
 * 
 */

// module.exports = function ( token, idClient, idCall, statusCall) {
    export default function ( token, idClient, idCall, statusCall) {
    
    validate.string(token)
    validate.string.notVoid('token', token)
    validate.string(idClient)
    validate.string.notVoid('idClient', idClient)
    validate.string(idCall)
    validate.string.notVoid('idClient', idCall)
    validate.string(statusCall)
    validate.string.notVoid('statusCall', statusCall)

    return (async () => {
        const res = await call(`${API_URL}/clients/${idClient}/calls/${idCall}`, {
            method: 'PATCH',
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({statusCall})
        })

        if(res.status === 200) return

        if(res.status === 401) throw new CredentialsError(JSON.parse(res.body).message)

        if(res.status === 404) throw new NotFoundError(JSON.parse(res.body).message)

        if(res.status === 409) throw new ConflictError(JSON.parse(res.body).message)

    })()
}