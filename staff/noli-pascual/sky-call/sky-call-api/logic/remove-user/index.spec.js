require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random } = Math
const removeUser = require('.')
const { errors: { NotFoundError } } = require('sky-call-util')
const { database, models: { User } } = require('sky-call-data')

describe('logic - remove user', () => {
    before(() => database.connect(TEST_DB_URL))

    let id, name, surname, username, password, role

    beforeEach(async () => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        username = `username-${random()}`
        password = `password-${random()}`
        role = 'agent'

        nameAdmin = `name-${random()}`
        surnameAdmin = `surname-${random()}`
        usernameAdmin = `username-${random()}`
        passwordAdmin = `password-${random()}`
        roleAdmin = 'admin'

        await User.deleteMany()

        const user = await User.create({ name, surname, username, password, role})

        const admin = await User.create({ name: nameAdmin, surname: surnameAdmin, username: usernameAdmin, password: passwordAdmin, role: roleAdmin})
        id = user.id
        idAdmin = admin.id
    })

    it('should succeed on correct user id', async () => {
        let user = await removeUser(id, idAdmin)

        expect(user).to.be.undefined
        
    })


    it('should fail on wrong user id', async () => {
        const wrongId = '012345678901234567890123'

        try {
            await removeUser(idAdmin, wrongId)

            throw Error('should not reach this point')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`user with id ${wrongId} not found`)
        }
    })

    // TODO other cases

    after(() => User.deleteMany().then(database.disconnect))
})