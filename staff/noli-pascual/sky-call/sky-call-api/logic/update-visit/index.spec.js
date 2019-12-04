require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random } = Math
const updateVisit = require('.')
const { errors: { NotFoundError } } = require('sky-call-util')
const { database, models: { User, Client, Route, Visit}, ObjectId } = require('sky-call-data')

describe('logic - update visit', () => {
    before(() => database.connect(TEST_DB_URL))
    let name, surname, username, password, role
    let idRoute, location
    let idClient, nameClient, surnameClient, tel, address
    let dateVisit, statusVisit

    beforeEach(async () => {

        //create user
        name = `name-${random()}`
        surname = `surname-${random()}`
        username = `username-${random()}`
        password = `password-${random()}`
        role = 'admin'

        //crear ruta
        location = 'Barcelona'

        //crear cliente

        nameClient = `nameClient-${random()}`
        surnameClient = `surnameClient-${random()}`
        tel = `tel-${random()}`

        address = `address-${random()}`
        callIds = []
        visits = []

        //new data

        newNameClient = 'new-name'
        newSurnameClient = 'new-surname'
        newTel = 'new-tel'
       
        newAddress = 'new-address'

        dateVisit = new Date()
        statusVisit = 'OK'

        await Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()])

        const route = await Route.create({ location })
        idRoute = route.id

        const route2 = await Route.create({ location })
        idRoute2 = route2.id

        const user = await User.create({ name, surname, username, password, role })
        id = user.id
      
        const client = await Client.create({ creator: id, nameClient, surnameClient, tel, location: idRoute, address })
        idClient = client.id

        const visit = await Visit.create({agent: id, client: idClient, dateVisit, statusVisit })
        idVisit = visit.id
        
    })

    it('should succeed on correct visit id', async () => {

        const newVisit = await updateVisit(id, idClient, idVisit, dateVisit, statusVisit)

        expect(newVisit).to.exist
        
        expect(newVisit.dateVisit).to.deep.equal(dateVisit)
        expect(newVisit.statusVisit).to.equal(statusVisit)
     

    })
    it('should fail on wrong visit id', async () => {
        const id2 = '251452145858'

        try {
            await await updateVisit(id, idClient, id2, dateVisit, statusVisit)

            throw Error('should not reach this point')

        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`visit with id ${id2} not found`)
        }
    })
    


    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany(), Visit.deleteMany()]).then(database.disconnect))
})