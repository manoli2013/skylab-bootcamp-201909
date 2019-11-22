const call = require('../../utils/call')
const { validate, errors: { NotFoundError} } = require('tasks-util')
//el destructuring falla
//const { env: { REACT_APP_API_URL: API_URL } } = process

const API_URL = process.env.REACT_APP_API_URL


module.exports = function (token, title, description) {
    validate.string(token)
    validate.string.notVoid('token', token)
    // if (!ObjectId.isValid(token)) throw new ContentError(`${id} is not a valid id`)

    validate.string(title)
    validate.string.notVoid('title', title)

    validate.string(description)
	validate.string.notVoid('description', description)
	
return (async () => {

	const res = await call(`${API_URL}/tasks`, {
		method: 'POST',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({ title, description })
	})

	if (res.status === 201) return JSON.parse(res.body).id

	if (res.status === 404) throw new NotFoundError(JSON.parse(res.body).message)
	if (res.status === 400) throw new NotFoundError(JSON.parse(res.body).message)
	// if (res.status === 500) throw new NotFoundError(JSON.parse(res.body).message)


	throw new Error(JSON.parse(res.body).message)

})()

}
/*
fetch('http://192.168.0.41:8000/tasks', {
	
})
	.then(res => res.json())
	.then(res => { debugger })
*/