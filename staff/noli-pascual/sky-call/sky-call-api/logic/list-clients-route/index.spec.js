require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { errors: { NotFoundError} } = require('sky-call-util')
const listClientsRoute = require('.')
const { random } = Math
const { database, ObjectId, models: { User, Client, Route } } = require('sky-call-data')

describe('logic - list clients by location', () => {
    before(() => database.connect(TEST_DB_URL))
    let name, surname, username, password, role
    let location

    beforeEach(async () => {

        //creo user

        name = `name-${random()}`
        surname = `surname-${random()}`
        username = `username-${random()}`
        password = `password-${random()}`
        role = 'agent'

        await Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()])

        const user = await User.create({ name, surname, username, password, role })
        id = user.id
       
        //creo rutas
        location = 'Barcelona'
       

        //creo clients de la ruta
    
        const createdClients = []
        for(i = 0; i <= 4; i++) {
            const client = {
                creator: id,
                nameClient: `name-${random()}`,
                surnameClient: `surname-${random()}`,
                tel: `tel- ${random()}`,
                location: location,
                address: `address-${random()}`,
                callIds: [],
                visits: []
            }
            createdClients.push(client)
            await Client.create(client)
           
        }

        //creo 1 cliente de otra ruta
        let location2 = '2584ñplokiju'
        const client2 = {
            creator: id,
                nameClient: `name-${random()}`,
                surnameClient: `surname-${random()}`,
                tel: `tel- ${random()}`,
                location: location2,
                address: `address-${random()}`,
                callIds: [],
                visits: []
        }
        
        const insertedClient = await Client.create(client2)
        idClient2 = insertedClient.id

        
    })

    it('should succeed listing clients by idRoute', async () => {
        const clients = await listClientsRoute(id, location)

        expect(clients).to.exist
        // expect(clients).to.have.lengthOf(5)
        const isNotListed = Client.findById(idClient2)
        expect(isNotListed).to.exist

        const isIncluded = clients.includes({isNotListed})
        expect(isIncluded).to.be.false

        
        clients.forEach(client => {debugger

            expect(client.id).to.exist

            expect(client.id).to.be.a('string')
            
            expect(client.location).to.equal(location)


        })
    })

       
    it('should succeed fail when no client in idRoute', async () => {
        const wrongLocationId = '452154215421'
        try {
            await listClientsRoute(id, wrongLocationId)

            throw Error('should not reach this point')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`No clients in location ${wrongLocationId}`)
        }
        
    })

    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()]).then(database.disconnect))
})