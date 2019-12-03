require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { errors: { NotFoundError } } = require('sky-call-util')
const listClients = require('.')
const { random } = Math
const { database, ObjectId, models: { User, Client, Route, Call } } = require('sky-call-data')

describe('logic - list calls clients', () => {
    before(() => database.connect(TEST_DB_URL))
    let name, surname, username, password, role
    let location
    let call1, call2, call3

    beforeEach(async () => {

        //create user
        name = `name-${random()}`
        surname = `surname-${random()}`
        username = `username-${random()}`
        password = `password-${random()}`
        role = 'agent'

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

    it('should succeed listing calls by correct client', async () => {
        const resultCalls = await listClients(id, idClient)

        expect(resultCalls).to.exist

        //refactor this!
        expect(resultCalls).to.have.lengthOf(4)
        const ids = []

        resultCalls.forEach(call => {
            ids.push(call.id)
            expect(call.id).to.be.a('string')
            expect(call.created).that.is.a('date')
        })
        expect(call1.id).to.be.oneOf(ids)
        expect(call2.id).to.be.oneOf(ids)
        expect(call3.id).to.be.oneOf(ids)

        expect(ids).that.is.an('array')

        

 
        // expect(call.status).to.equ
    })


    it('should succeed fail when wrong client', async () => {
        const wrongClient = '452154215421'
        try {
            await listClients(id, wrongClient)

            throw Error('should not reach this point')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`client with id ${wrongClient} not found`)
        }

    })

    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()]).then(database.disconnect))
})