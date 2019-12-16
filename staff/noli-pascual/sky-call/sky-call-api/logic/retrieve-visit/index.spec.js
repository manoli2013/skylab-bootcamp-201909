require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random } = Math
const retrieveCall = require('.')
const { errors: { NotFoundError } } = require('sky-call-util')
const { database, models: { User, Client, Route, Call, Visit} } = require('sky-call-data')

describe('logic - retrieve visit', () => {
    before(() => database.connect(TEST_DB_URL))
    let name, surname, username, password, role
    let idRoute, location
    let idClient, creator, nameClient, surnameClient, tel, address, callIds, visits
    let dateVisit, statusVisit
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

        //visit
        dateVisit = new Date()
        statusVisit = 'OK'

        

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

        const visit = await Visit.create({agent: id, client: idClient, dateVisit, statusVisit })
        idVisit = visit.id
    })

    it('should succeed on correct call id', async () => {
        
        const resultVisit = await retrieveCall(id, idClient, idVisit)
        
        expect(resultVisit).to.exist
        expect(resultVisit.id).to.equal(idVisit)
        expect(resultVisit.id.toString()).to.be.a('string')
       
        expect(resultVisit.client.toString()).to.equal(idClient)
        expect(resultVisit.client.toString()).to.be.a('string')

        // expect(resultVisit.created).to.equal(call.created)
        expect(resultVisit.client.toString()).to.equal(idClient)
        
    })

    it('should fail on wrong visit id', async () => {
        const wrongIdVisit = '251452145858'

        try {
            await retrieveCall(id, idClient, wrongIdVisit)

            throw Error('should not reach this point')

        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`visit with id ${wrongIdVisit} not found`)
        }
    })


    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany(), Visit.deleteMany()]).then(database.disconnect))
})