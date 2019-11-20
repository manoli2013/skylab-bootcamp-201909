export default function(id, token) {
    if (typeof id !== 'string') throw new TypeError(id + ' is not a string')
    if (!id.trim().length) throw new ContentError('id is empty or blank')
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string')
    if (!token.trim().length) throw new ContentError('token is empty or blank')
    if (typeof callback !== 'function') throw new TypeError(callback +  ' is not a function')

    // call('GET', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, undefined, result => {
    //     result.error ? callback(new Error(result.error)) : callback(undefined, result.data)
    // })

    return fetch(`http://192.168.0.20:3000/users/${id}`, {
        method: 'GET',
		headers: { 'Content-Type': 'application/json' , 'Authorization': `Bearer ${token}`},
		
	})
        .then(res => res.status === 201 ? res.json() : '')
        // .then(({ message }) => { throw Error(message) })

}