require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random } = Math
const listCallsAdmin = require('.')
const { errors: { NotFoundError } } = require('sky-call-util')
const { database, models: { User, Client, Route, Call } } = require('sky-call-data')

describe('logic - list calls admin', () => {
    before(() => database.connect(TEST_DB_URL))
    let name, surname, username, password, role
    let idRoute, location
    let idClient, creator, nameClient, surnameClient, tel, address, callIds, visits
    let call1, call2, call3
    let idAdmin
    let nameAdmin, surnameAdmin, usernameAdmin, passwordAdmin, roleAdmin

    beforeEach(async () => {

        //create user
        name = `name-${random()}`
        surname = `surname-${random()}`
        username = `username-${random()}`
        password = `password-${random()}`
        role = 'agent'

        //create user admin
        nameAdmin = `name-${random()}`
        surnameAdmin = `surname-${random()}`
        usernameAdmin = `username-${random()}`
        passwordAdmin = `password-${random()}`
        roleAdmin = 'admin'

        //crear ruta
        location = 'Barcelona'

        //crear cliente

        nameClient = `nameClient-${random()}`
        surnameClient = `surnameClient-${random()}`
        tel = `tel-${random()}`

        address = `address-${random()}`
        callIds = []
        visits = []

        await Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany(), Call.deleteMany()])

        const route = await Route.create({ location })
        idRoute = route.id

        const user = await User.create({ name, surname, username, password, role })
        creator = user.id
        id = user.id
        location = idRoute

        const admin = await User.create({ name: nameAdmin, surname: surnameAdmin, username: usernameAdmin, password: passwordAdmin, role: roleAdmin })
        idAdmin = admin.id

        const client = await Client.create({ creator, nameClient, surnameClient, tel, location, address, callIds, visits })

        idClient = client.id

        const call = await Call.create({ agent: id, client: idClient, created: new Date(), calling: true, statusCall: 'N.A', })
        idCall = call.id

        call1 = await Call.create({ agent: id, client: idClient, created: new Date(), calling: true, statusCall: 'N.A', })
        idCall1 = call1.id

        call2 = await Call.create({ agent: id, client: idClient, created: new Date(), calling: true, statusCall: 'N.A', })
        idCall2 = call2.id

        call3 = await Call.create({ agent: id, client: idClient, created: new Date(), calling: true, statusCall: 'N.A', })
        idCall3 = call3.id

    })

    it('should succeed listing all calls with id admin', async () => {
        

        const resultCalls = await listCallsAdmin(idAdmin)

        expect(resultCalls).to.exist
        expect(resultCalls).to.be.an('array')
        // expect(resultCalls).to.include(call1)
        
        const ids = []

        resultCalls.forEach(call => {
            ids.push(call.id)
        })
        expect(idCall1).to.be.oneOf(ids)
        expect(idCall2).to.be.oneOf(ids)
        expect(idCall3).to.be.oneOf(ids)

        //TODO

    })

    it('should fail on wrong admin id', async () => {
        const wrongAdminId = '251452145858'

        try {
            await listCallsAdmin(wrongAdminId)

            throw Error('should not reach this point')

        } catch (error) {

            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`user with id ${wrongAdminId} not found`)
        }
    })

    // TODO other cases

    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany(), Call.deleteMany()]).then(database.disconnect))
})