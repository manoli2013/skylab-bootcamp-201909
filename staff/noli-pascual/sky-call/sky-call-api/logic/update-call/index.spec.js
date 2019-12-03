require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random } = Math
const updateClient = require('.')
const { errors: { NotFoundError } } = require('sky-call-util')
const { database, models: { User, Client, Route }, ObjectId } = require('sky-call-data')

describe('logic - update call', () => {
    before(() => database.connect(TEST_DB_URL))
    let name, surname, username, password, role
    let idRoute, location
    let idClient, nameClient, surnameClient, tel, address

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

        await Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()])

        const route = await Route.create({ location })
        idRoute = route.id

        const route2 = await Route.create({ location })
        idRoute2 = route2.id

        const user = await User.create({ name, surname, username, password, role })
        id = user.id
      
        const client = await Client.create({ creator: id, nameClient, surnameClient, tel, location: idRoute, address })
        idClient = client.id
        
    })

    it('should succeed on correct client id', async () => {

        const newClient = await updateClient(id, idClient, newNameClient, newSurnameClient, newTel, idRoute2, newAddress)

        expect(newClient).to.exist
        
        expect(newClient.nameClient).to.equal(newNameClient)
        expect(newClient.surnameClient).to.equal(newSurnameClient)
        expect(newClient.tel).to.equal(newTel)
        expect(newClient.location.toString()).to.equal(idRoute2)
        expect(newClient.address).to.equal(newAddress)

    })
    it('should fail on wrong user id', async () => {
        const id2 = '251452145858'

        try {
            await updateClient(id2, idClient, newNameClient, newSurnameClient, newTel, idRoute2, newAddress)

            throw Error('should not reach this point')

        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`user with id ${id2} not found`)
        }
    })
    it('should fail on wrong client id', async () => {
        const wrongClientId = '251452145858'

        try {
            await updateClient(id, wrongClientId, newNameClient, newSurnameClient, newTel, idRoute2, newAddress)

            throw Error('should not reach this point')

        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`client with id ${wrongClientId} not found`)
        }
    })


    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()]).then(database.disconnect))
})