require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random } = Math
const retrieveClient = require('.')
const { errors: { NotFoundError } } = require('sky-call-util')
const { database, models: { User, Client, Route } } = require('sky-call-data')

describe('logic - retrieve client', () => {
    before(() => database.connect(TEST_DB_URL))
    let id
    let name, surname, username, password, role
    let idRoute, location
    let idClient, creator, nameClient, surnameClient, tel, address, callIds, visits

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

        await Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()])

        const route = await Route.create( {location} )
        idRoute = route.id
        
        const user = await User.create( {name, surname, username, password, role} )
        creator = user.id
        id = user.id
        location = idRoute

        const client = await Client.create({ creator, nameClient, surnameClient, tel, location, address, callIds, visits })
        
        idClient = client.id
    })

    it('should succeed on correct client id', async () => {
        
        const client = await retrieveClient(id, idClient)
        
        expect(client).to.exist
        expect(client.id).to.equal(idClient)
        expect(client.id).to.be.a('string')
        //pendiente
        // expect(resultClient._id).to.not.exist
        expect(client.creator.toString()).to.equal(creator)
        expect(client.creator.toString()).to.be.a('string')

        expect(client.nameClient).to.equal(nameClient)
        expect(client.nameClient).to.be.a('string')
        expect(client.surnameClient).to.equal(surnameClient)
        expect(client.surnameClient).to.be.a('string')
        expect(client.tel).to.equal(tel)
        expect(client.tel).to.be.a('string')
        expect(client.location.toString()).to.equal(idRoute)
        expect(client.address).to.equal(address)
        expect(client.address).to.be.a('string')

    })

    it('should fail on wrong client id', async () => {
        const idClient = '251452145858'

        try {
            await retrieveClient(idClient)

            throw Error('should not reach this point')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`client with id ${idClient} not found`)
        }
    })

    // TODO other cases

    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()]).then(database.disconnect))
})