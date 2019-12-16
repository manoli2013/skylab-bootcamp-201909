require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const stopCall = require('.')
const { random } = Math
const { errors: { ContentError } } = require('sky-call-util')
const { database, models: { User, Client, Route, Call } } = require('sky-call-data')

describe('logic - stop call', () => {
    before(() => database.connect(TEST_DB_URL))

    let id, name, surname, username, password, role
    let location
    let nameClient, surnameClient, tel, address, callIds, visits
    let idCall
    

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
        
        statusCall = 'A'
        //todo test fail when user is not admin
        

        await Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()])

        //create user
        const user = await User.create({ name, surname, username, password, role })
        id = user.id
        

        const client = await Client.create({id, nameClient, surnameClient, tel, location, address, callIds, visits})
        idClient = client.id

        

        const call = await Call.create({agent: id, client: idClient, created: new Date(), calling: true, statusCall })
        idCall = call.id
    })

    it('should succeed on stoping the call', async () => {
    
        const stop = await stopCall(id, idClient, idCall, statusCall)
        
        expect(stop).to.not.exist

        const stopedCall = await Call.findById(idCall)
        expect(stopedCall.calling).to.equal(false)
        expect(stopedCall.duration).to.exist
        expect(stopedCall.created).to.be.instanceOf(Date)
        expect(stopedCall.finished).to.be.instanceOf(Date)
        expect(stopedCall.statusCall).to.equal(statusCall)
       
       
    })


    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany(), Call.deleteMany()]).then(database.disconnect))
})
