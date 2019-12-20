import call from '../../utils/call' //eslint-disable-line
const { validate, errors: { NotFoundError, CredentialsError } } = require('sky-call-util')
const API_URL = process.env.REACT_APP_API_URL


/**
* Retrieves user data
* 
* @param {string} token of the user
* @param {string} idClient of the user
* 
* @returns {Promise} res is a Client
*/

// module.exports = function (token, idClient) {
    export default function (token, idClient) {
    validate.string(token)
    validate.string.notVoid('token', token)

    validate.string(idClient)
    validate.string.notVoid('idClient', idClient)

    return (async () => {
        const res = await call(`${API_URL}/clients/${idClient}`, {
            method: 'GET',
            headers: {Authorization: `Bearer ${token}`}
        })
 
        if(res.status === 200){
            const client = JSON.parse(res.body)
 
            return client
        }
 
        if(res.status === 401) throw new CredentialsError(JSON.parse(res.body).message)
 
        if(res.status === 404) throw new NotFoundError(JSON.parse(res.body).message)
 
        throw new Error(JSON.parse(res.body).message)
    })()
}