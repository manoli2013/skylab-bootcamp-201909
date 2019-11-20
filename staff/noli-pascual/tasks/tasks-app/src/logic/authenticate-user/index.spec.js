import authenticateUser from '.'

describe('logic - authenticate user', () => {
    let name, surname, username, email, password

    beforeEach(() => {
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@mail.com`
        password = `password-${Math.random()}`

        return fetch('http://192.168.0.20:3000/users', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name, surname, email, username, password })
	})
		// .then(res => res.status === 201 ? undefined : res.json().then(({ message }) => { throw Error(message) }))
    })

    it('should succeed on correct credentials', () => 
    
        authenticateUser(username, password)
            .then(response => {
                expect(response).toBeDefined()
                expect(error).toBeUndefined()
                
                const { token } = response
    
                expect(token).toBeDefined()
                expect(typeof token).toBe('string')
                expect(token.length).toBeGreaterThan(0)
    
            })

    )

    it('should fail on incorrect email, password', () => {
        expect(() => authenticateUser(1)).toThrowError(TypeError, '1 is not a string')
        expect(() => authenticateUser(true)).toThrowError(TypeError, 'true is not a string')
        expect(() => authenticateUser([])).toThrowError(TypeError, ' is not a string')
        expect(() => authenticateUser({})).toThrowError(TypeError, '[object Object] is not a string')
        expect(() => authenticateUser(undefined)).toThrowError(TypeError, 'undefined is not a string')
        expect(() => authenticateUser(null)).toThrowError(TypeError, 'null is not a string')

        expect(() => authenticateUser('')).toThrowError(ContentError, 'e-mail is empty or blank')
        expect(() => authenticateUser(' \t\r')).toThrowError(ContentError, 'e-mail is empty or blank')

        expect(() => authenticateUser(username, 1)).toThrowError(TypeError, '1 is not a string')
        expect(() => authenticateUser(username, true)).toThrowError(TypeError, 'true is not a string')
        expect(() => authenticateUser(username, [])).toThrowError(TypeError, ' is not a string')
        expect(() => authenticateUser(username, {})).toThrowError(TypeError, '[object Object] is not a string')
        expect(() => authenticateUser(username, undefined)).toThrowError(TypeError, 'undefined is not a string')
        expect(() => authenticateUser(username, null)).toThrowError(TypeError, 'null is not a string')

        expect(() => authenticateUser(username, '')).toThrowError(ContentError, 'password is empty or blank')
        expect(() => authenticateUser(email, ' \t\r')).toThrowError(ContentError, 'password is empty or blank')

    })

    // TODO other cases
})