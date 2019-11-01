fdescribe('logic - toggleFav', () => {

    let name, surname, email, password, id, token

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
        const idLaunch = 53
        const arrFavs = [53]


        it('it should create favorite array inside of user account', done => {

            toggleFav(id, token, idLaunch, (error) => {

                expect(error).toBeUndefined()

                call('GET', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, undefined, result => {
                    if (result.error) done(new Error(result.error))
                    else {
                        const { data: user } = result

                        expect(user).toBeDefined()
                        expect(user.favs).toBeDefined()
                        expect(user.favs).toEqual(arrFavs)
                        done()

                    }
                })
            })

        })

    })

    describe('user add favorite news', () => {

        const idLaunch = 53
        const addFavs = [40, 45]
        const resultFavs = [40, 45, 53]

        it('it should add favorite news', done => {

            call('PUT', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, { favs: addFavs }, () => {

                toggleFav(id, token, idLaunch, (error) => {

                    expect(error).toBeUndefined()

                    call('GET', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, undefined, result => {
                        if (result.error) done(new Error(result.error))
                        else {
                            const { data: user } = result

                            expect(user).toBeDefined()
                            expect(user.favs).toBeDefined()
                            expect(user.favs).toEqual(resultFavs)
                            done()

                        }
                    })

                })
            })

        })

    })

    describe('user remove favorite news', () => {

        const idLaunch = 53
        const addFavs = [40, 45, 53]
        const resultFavs = [40, 45]

        it('it should delete favorite news', done => {

            call('PUT', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, { favs: addFavs }, () => {

                toggleFav(id, token, idLaunch, (error) => {

                    expect(error).toBeUndefined()

                    call('GET', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, undefined, result => {
                        if (result.error) done(new Error(result.error))
                        else {
                            const { data: user } = result

                            expect(user).toBeDefined()
                            expect(user.favs).toBeDefined()
                            expect(user.favs).toEqual(resultFavs)
                            done()

                        }
                    })

                })
            })

        })

    })

})