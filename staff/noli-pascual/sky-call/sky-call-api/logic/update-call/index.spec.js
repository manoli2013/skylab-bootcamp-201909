require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random } = Math
const updateCall = require('.')
const { errors: { NotFoundError } } = require('sky-call-util')
const { database, models: { User, Client, Route, Call }, ObjectId } = require('sky-call-data')

describe('logic - update call', () => {
    before(() => database.connect(TEST_DB_URL))
    let name, surname, username, password, role
    let location, statusRoute
    let idClient, nameClient, surnameClient, tel, address

    beforeEach(async () => {

        //create user
        name = `name-${random()}`
        surname = `surname-${random()}`
        username = `username-${random()}`
        password = `password-${random()}`
        role = 'agent'

        //crear ruta

        location = '452154854875'
        statusRoute = 'pasive'

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

        const user = await User.create( {name, surname, username, password, role} )
        const id = user.id

        const route = await Route.create({user: id, location, statusRoute})

        const client = await Client.create({ creator: id, nameClient, surnameClient, tel, location: route.id, address, callIds, visits })
        
        idClient = client.id

        const call = await Call.create({agent: id, client: idClient, created: new Date(), calling: true, statusCall: 'N.A', })
        idCall = call.id
        
    })

    it('should succeed on correct call id', async () => {   

        const newStatus = 'A'

        const newCall = await updateCall(id, idClient, idCall, newStatus)

        expect(newCall).to.exist
        
        expect(newCall.id).to.equal(idCall)
        expect(newCall.statusVisit).to.equal(newStatus)
       

    })
    it('should fail on wrong call id', async () => {debugger
        const newStatus1 = 'A'
        const id2 = '253521548758'

        try {
            await updateCall(id, idClient, id2, newStatus1)

            throw Error('should not reach this point')

        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`call with id ${id2} not found`)
        }
    })
    


    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()], Call.deleteMany()).then(database.disconnect))
})