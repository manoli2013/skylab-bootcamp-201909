require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const createVisit = require('.')
const { random } = Math
const { database, models: { User, Visit, Client, Route, Agent } } = require('sky-call-data')

describe('logic - create visit', () => {
    before(() => database.connect(TEST_DB_URL))

    let id, name, surname, username, password, role
    let idRoute, location
    let creator, nameClient, surnameClient, tel, address, callIds, visits
    let idVisit, dateVisit, status

    beforeEach(async () => {
        //user
        name = `name-${random()}`
        surname = `surname-${random()}`
        username = `username-${random()}`
        password = `password-${random()}`
        role = 'agent'

        //ruta
        location = `locarion-${random()}`

        //client
        nameClient = `name-${random()}`
        surnameClient = `surname-${random()}`
        tel = `tel-${random()}`
        address = `address-${random()}`
        callIds = []
        visits = []


        await Promise.all([User.deleteMany(), Visit.deleteMany(), Client.deleteMany(), Route.deleteMany()])

        const user = await User.create({ name, surname, username, password, role, profile: new Agent() })

        id = user.id

        creator = id

        const route = await Route.create({ location })
        idRoute = route.id

        const client = await Client.create({ creator, nameClient, surnameClient, tel, location: idRoute, address, callIds, visits })
        idClient = client.id


    })

    it('should succeed on correct user and visit data', async () => {


        //visit
        let dateVisit = new Date()
        
        let status = 'OK'

        const resultVisit = await createVisit(id, idClient, dateVisit, status)
        
        expect(resultVisit).to.exist
        expect(resultVisit).to.be.a('string')

        expect(resultVisit).to.have.length.greaterThan(0)

        const visit = await Visit.findById(resultVisit)

        expect(visit).to.exist

        expect(visit.statusVisit).to.equal(status)
        expect(visit.statusVisit).to.be.a('string')
        expect(visit.dateVisit).to.deep.equal(dateVisit)
        expect(visit.dateVisit).to.be.instanceOf(Date)
        expect(visit.dateRegister).to.exist
        expect(visit.dateRegister).to.be.instanceOf(Date)

        
    })

  

    after(() => Promise.all([User.deleteMany(), Visit.deleteMany(), Client.deleteMany(), Route.deleteMany()]).then(database.disconnect))
})