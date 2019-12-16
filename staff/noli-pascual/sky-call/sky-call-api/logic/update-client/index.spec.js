require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random } = Math
const updateClient = require('.')
const { errors: { NotFoundError } } = require('sky-call-util')
const { database, models: { User, Client }, ObjectId } = require('sky-call-data')

describe('logic - update client', () => {
    before(() => database.connect(TEST_DB_URL))
    let name, surname, username, password, role
    let location
    let idClient, nameClient, surnameClient, tel, address

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

       
        await Promise.all([User.deleteMany(), Client.deleteMany()])

     
        const user = await User.create({ name, surname, username, password, role })
        id = user.id
      
        const client = await Client.create({ creator: id, nameClient, surnameClient, tel, location, address })
        idClient = client.id
        
    })

    it('should succeed on correct client id', async () => {
         //new data

         let newNameClient = 'new-name'
         let newSurnameClient = 'new-surname'
         let newTel = 'new-tel'
         let newLocation = 'Asturias'
         let newAddress = 'new-address'
 

        const modificated = await updateClient(id, idClient, newNameClient, newSurnameClient, newTel, newLocation, newAddress)

        expect(modificated).to.not.exist
        
        const newClient = await Client.findById(idClient)
        expect(newClient.nameClient).to.equal(newNameClient)
        expect(newClient.surnameClient).to.equal(newSurnameClient)
        expect(newClient.tel).to.equal(newTel)
        expect(newClient.location.toString()).to.equal(newLocation)
        expect(newClient.address).to.equal(newAddress)

    })
    it('should fail on wrong user id', async () => {
         //new data

         let newNameClient = 'new-name'
         let newSurnameClient = 'new-surname'
         let newTel = 'new-tel'
         let newLocation = 'Asturias'
         let newAddress = 'new-address'
        const id2 = '251452145858'

        try {
            await updateClient(id2, idClient, newNameClient, newSurnameClient, newTel, newLocation, newAddress)

            throw Error('should not reach this point')

        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`user with id ${id2} not found`)
        }
    })
    it('should fail on wrong client id', async () => {
         //new data

         let newNameClient = 'new-name'
         let newSurnameClient = 'new-surname'
         let newTel = 'new-tel'
         let newLocation = 'Asturias'
         let newAddress = 'new-address'
        const wrongClientId = '251452145858'

        try {
            await updateClient(id, wrongClientId, newNameClient, newSurnameClient, newTel, newLocation, newAddress)

            throw Error('should not reach this point')

        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`client with id ${wrongClientId} not found`)
        }
    })


    after(() => Promise.all([User.deleteMany(), Client.deleteMany()]).then(database.disconnect))
})