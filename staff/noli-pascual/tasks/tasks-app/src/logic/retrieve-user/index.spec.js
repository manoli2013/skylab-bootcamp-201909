import retrieveUser from '.'

describe('logic - retrieve user', () => {
    let name, surname, email, username, password, id, token

    beforeEach( () => {
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@mail.com`
        password = `password-${Math.random()}`

        //register
        return fetch('http://192.168.0.20:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, surname, email, username, password })

        })
            .then(res => res.status === 201 ? undefined : res.json().then(({ message }) => { throw Error(message) }))

            //authenticate
            .then(

                fetch('http://192.168.0.20:3000/auth', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: username, password: password })
                })
                    .then(res => res.json())
                    .then(({ message }) => { throw Error(message) })

                    .then(result => {

                        const { token } = result

                        const string = token.split('.')[1]
                        const encodedString = Base64.decode(string)
                        const object = JSON.parse(encodedString)
                        console.log(object)
                    })
            )
        
    })

    it('should succeed on correct user data', () => {
        retrieveUser((id, token) => {
            expect(error).toBeUndefined()

            // expect(data).toBeDefined()
            // expect(data.name).toBe(name)
            // expect(data.surname).toBe(surname)
            // expect(data.username).toBe(email)
            // expect(data.password).toBeUndefined()

            // done()
        })
    })

    // TODO other cases
})