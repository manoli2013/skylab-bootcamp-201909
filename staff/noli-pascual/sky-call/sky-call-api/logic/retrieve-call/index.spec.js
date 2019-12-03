require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random } = Math
const retrieveCall = require('.')
const { errors: { NotFoundError } } = require('sky-call-util')
const { database, models: { User, Client, Route, Call} } = require('sky-call-data')

describe('logic - retrieve call', () => {
    before(() => database.connect(TEST_DB_URL))
    let name, surname, username, password, role
    let idRoute, location
    let idClient, creator, nameClient, surnameClient, tel, address, callIds, visits
    let idCall
    let idAdmin

    beforeEach(async () => {

        //create user
        name = `name-${random()}`
        surname = `surname-${random()}`
        username = `username-${random()}`
        password = `password-${random()}`
        role = 'agent'

        //create user
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

        const route = await Route.create( {location} )
        idRoute = route.id
        
        const user = await User.create( {name, surname, username, password, role} )
        creator = user.id
        id = user.id
        location = idRoute

        const admin = await User.create( {name: nameAdmin, surname: surnameAdmin, username: usernameAdmin, password: passwordAdmin, role: roleAdmin} )
        idAdmin = admin.id
        
        const client = await Client.create({ creator, nameClient, surnameClient, tel, location, address, callIds, visits })
        
        idClient = client.id

        const call = await Call.create({agent: id, client: idClient, created: new Date(), calling: true, statusCall: 'N.A', })
        idCall = call.id
    })

    it('should succeed on correct call id', async () => {
        
        const resultCall = await retrieveCall(id, idClient, idCall)
        
        expect(resultCall).to.exist
        expect(resultCall.id).to.equal(idCall)
        expect(resultCall.id.toString()).to.be.a('string')
       
        expect(resultCall.client.toString()).to.equal(idClient)
        expect(resultCall.client.toString()).to.be.a('string')

        // expect(resultCall.created).to.equal(call.created)
        expect(resultCall.client.toString()).to.equal(idClient)
        
    })

    it('should fail on wrong call id', async () => {
        const wrongIdCall = '251452145858'

        try {
            await retrieveCall(id, idClient, wrongIdCall)

            throw Error('should not reach this point')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`call with id ${wrongIdCall} not found`)
        }
    })

    // TODO other cases

    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany(), Call.deleteMany()]).then(database.disconnect))
})