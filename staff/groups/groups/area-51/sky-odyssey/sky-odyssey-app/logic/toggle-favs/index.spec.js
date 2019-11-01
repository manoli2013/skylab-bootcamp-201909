describe('logic - toggleFav', () => {

    let name, surname, email, password, id, token
    const idLa

    beforeEach(done => {
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@mail.com`
        password = `password-${Math.random()}`

        call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/user', { name, surname, username: email, password }, result => {
            if (result.error) done(new Error(result.error))
            else {
                call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/auth', { username: email, password }, result => {
                    if (result.error) done(new Error(result.error))
                    else {
                        const { data } = result

                        id = data.id
                        token = data.token

                        done()
                    }
                })
            }
        })
    })

    describe('user without favorite news', () => {

        let idLaunch = 53

        it('it should create favorite array inside of user account', done => {
            toggleFav(id, token, idLaunch, call)
        })

    })

    describe('user add favorite news', () => {

        

    })

    describe('user remove favorite news', () => {

        

    })

})