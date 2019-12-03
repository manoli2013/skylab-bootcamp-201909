require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const createCall = require('.')
const { random } = Math
const { errors: { ContentError } } = require('sky-call-util')
const { database, models: { User, Client, Route, Call } } = require('sky-call-data')

describe('logic - createCall', () => {
    before(() => database.connect(TEST_DB_URL))

    let id, name, surname, username, password, role
    let location
    let nameClient, surnameClient, tel, address, callIds, visits
   
    

    beforeEach( async () => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        username = `username-${random()}`
        password = `password-${random()}`
        role = 'agent'

        location = `location-${random()}`

        nameClient = `nameClient-${random()}`
        surnameClient = `surnameClient-${random()}`
        tel = `tel-${random()}`
        address = `address-${random()}`
        
        
        //todo test fail when user is not admin
        

        await Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()])

        //create user
        const user = await User.create({ name, surname, username, password, role })
        id = user.id
        
        //create route
        const route = await Route.create({location})
        idRoute = route.id

        const client = await Client.create({id, nameClient, surnameClient, tel, location: idRoute, address, callIds, visits})
        idClient = client.id

        
        
    })

    it('should succeed on correct credentials', async () => {
    
        const response = await createCall(id, idClient)

        expect(response).to.exist

    })

    
    // TODO other cases

    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany(), Call.deleteMany()]).then(database.disconnect))
})