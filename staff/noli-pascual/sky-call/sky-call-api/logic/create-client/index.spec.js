require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const createClient = require('.')
const { random } = Math
const { errors: { ContentError } } = require('sky-call-util')
const { database, models: { User, Client, Route } } = require('sky-call-data')

describe('logic - createClient', () => {
    before(() => database.connect(TEST_DB_URL))

    let id, name, surname, username, password, role
    let location
    let nameClient, surnameClient, tel, locationClient, address, callIds, visits
    

    beforeEach( async () => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        username = `username-${random()}`
        password = `password-${random()}`
        role = 'admin'

        location = `location-${random()}`

        nameClient = `nameClient-${random()}`
        surnameClient = `surnameClient-${random()}`
        tel = `tel-${random()}`
        
        address = `address-${random()}`
        callIds = []
        visits = []

        //todo test fail when user is not admin
        

        await Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()])

        //create user
        const user = await User.create({ name, surname, username, password, role })
        id = user.id
        
        //create route
        const route = await Route.create({user: id, location})
        idRoute = route.id
        
    })

    it('should succeed on correct credentials', async () => {debugger
    
        const clientId = await createClient(id, nameClient, surnameClient, tel, idRoute, address, callIds, visits)

        
        const clientFiltered = await Client.findById( clientId )

        expect(clientFiltered).to.exist
       
        // expect(clientFiltered).to.exist

        expect(clientFiltered.nameClient).to.equal(nameClient)
        expect(clientFiltered.surnameClient).to.equal(surnameClient)
        expect(clientFiltered.tel).to.equal(tel)
        expect(clientFiltered.location.toString()).to.equal(idRoute)
        expect(clientFiltered.address).to.equal(address)

    })

    
    // TODO other cases

    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()]).then(database.disconnect))
})