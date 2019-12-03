require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { errors: { NotFoundError } } = require('sky-call-util')
const listVisitsClient = require('.')
const { random } = Math
const { database, models: { User, Client, Route, Visit } } = require('sky-call-data')

describe('logic - list visits clients', () => {
    before(() => database.connect(TEST_DB_URL))
    let name, surname, username, password, role
    let idClient, nameClient, surnameClient, tel, address, callIds, visits
    let location
    let dateRegister, dateVisit, status


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

        //crear visitas
        dateRegister = new Date
        dateVisit = new Date
        status = 'PDTE'

        await Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany(), Visit.deleteMany()])

        //crear en mongo

        const route = await Route.create({ location })
        idRoute = route.id

        //user
        const user = await User.create({ name, surname, username, password, role })
        id = user.id
        location = idRoute

        //cliente
        const client = await Client.create({ creator: id, nameClient, surnameClient, tel, location, address, callIds, visits })

        idClient = client.id

        //visitas
        const visit1 = await Visit.create({ agent: id, client: idClient, dateRegister, dateVisit, status })
        idVisit = visit1.id

        const visit2 = await Visit.create({ agent: id, client: idClient, dateRegister, dateVisit, status })
        idVisit = visit2.id

        const visit3 = await Visit.create({ agent: id, client: idClient, dateRegister, dateVisit, status })
        idVisit = visit3.id

        const idClient2 = '125425154875'
        const visitNotBelonging = await Visit.create({ agent: id, client: idClient2, dateRegister, dateVisit, status })
        idVisit = visitNotBelonging.id
    })

    it('should succeed listing visits by client', async () => {
        const visits = await listVisitsClient(id, idClient)

        expect(visits).to.exist
        expect(visits).to.have.lengthOf(3)

        visits.forEach(visit => {

            expect(visit.id).to.exist
            expect(visit.id).to.be.a('string')

            expect(visit.agent.toString()).to.equal(id)
            expect(visit.client.toString()).to.equal(idClient)

            expect(visit.dateRegister).to.deep.equal(dateRegister)

            expect(visit.dateVisit).to.deep.equal(dateVisit)

            expect(visit.status).to.equal(status)
            expect(typeof visit.status).to.be.a('string')

        })
    })


    // it('should fail when no client in idRoute', async () => {
    //     const wrongLocationId = '452154215421'
    //     try {
    //         await listClients(wrongLocationId)

    //         throw Error('should not reach this point')
    //     } catch (error) {
    //         expect(error).to.exist
    //         expect(error).to.be.an.instanceOf(NotFoundError)
    //         expect(error.message).to.equal(`No clients in route ${wrongLocationId}`)
    //     }

    // })

    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany(), Visit.deleteMany()]).then(database.disconnect))
})