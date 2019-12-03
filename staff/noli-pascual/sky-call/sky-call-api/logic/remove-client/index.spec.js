require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random } = Math
const removeClient = require('.')
const { errors: { NotFoundError } } = require('sky-call-util')
const { database, models: { User, Client, Route }, ObjectId } = require('sky-call-data')

describe('logic - remove client', () => {
    before(() => database.connect(TEST_DB_URL))
    let name, surname, username, password, role
    let idRoute, location
    let idClient, creator, nameClient, surnameClient, tel, address, callIds, visits

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

        await Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()])

        const route = await Route.create({ location })
        idRoute = route.id

        const user = await User.create({ name, surname, username, password, role })
        id = user.id
      
        const client = await Client.create({ creator: id, nameClient, surnameClient, tel, location: idRoute, address, callIds, visits })
        idClient = client.id
        
    })

    it('should succeed on correct client id', async () => {


        const response = await removeClient(id, idClient)

        expect(response).to.be.undefined

        const userClients = await Client.findOne({user: id, _id: idClient})
        
        expect(userClients).to.not.exist


    })
    // it('should fail on wrong user id', async () => {
    //     const idAdmin = '251452145858'

    //     try {
    //         await removeClient(idAdmin, idClient)

    //         throw Error('should not reach this point')
    //     } catch (error) {
    //         expect(error).to.exist
    //         expect(error).to.be.an.instanceOf(NotFoundError)
    //         expect(error.message).to.equal(`client with id ${idClient} not found`)
    //     }
    // })
    // it('should fail on wrong client id', async () => {
    //     const idClient = '251452145858'

    //     try {
    //         await removeClient(idAdmin, idClient)

    //         throw Error('should not reach this point')
    //     } catch (error) {
    //         expect(error).to.exist
    //         expect(error).to.be.an.instanceOf(NotFoundError)
    //         expect(error.message).to.equal(`client with id ${idClient} not found`)
    //     }
    // })


    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()]).then(database.disconnect))
})