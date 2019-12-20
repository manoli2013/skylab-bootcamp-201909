import call from '../../utils/call' //eslint-disable-line
const { validate, errors: { NotFoundError, CredentialsError } } = require('sky-call-util')
const API_URL = process.env.REACT_APP_API_URL

// module.exports = function (token, location) {
    export default function (token, location) {
    validate.string(token)
    validate.string.notVoid('token', token)
  
    return (async () => {

        const res = await call(`${API_URL}/clients/list/${location}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
            body: JSON.stringify({location})
        })

        if (res.status === 200) {
            const clients = JSON.parse(res.body)

            return clients
        }

        if (res.status === 401) throw new CredentialsError(JSON.parse(res.body).message)

        if (res.status === 404) throw new NotFoundError(JSON.parse(res.body).message)

        throw new Error(JSON.parse(res.body).message)

    })()
}