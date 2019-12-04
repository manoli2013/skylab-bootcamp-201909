require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { errors: { NotFoundError} } = require('sky-call-util')
const listClients = require('.')
const { random } = Math
const { database, ObjectId, models: { User, Client, Route } } = require('sky-call-data')

describe('logic - list clients by idRoute', () => {
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
        const route = await Route.create( {location} )
        idRoute = route.id

        //creo clients de la ruta
    
        const createdClients = []
        for(i = 0; i <= 4; i++) {
            const client = {
                creator: id,
                nameClient: `name-${random()}`,
                surnameClient: `surname-${random()}`,
                tel: `tel- ${random()}`,
                location: idRoute,
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
        const clients = await listClients(id, idRoute)

        expect(clients).to.exist
        // expect(clients).to.have.lengthOf(5)
        const isNotListed = Client.findById(idClient2)
        expect(isNotListed).to.exist

        const isIncluded = clients.includes({isNotListed})
        expect(isIncluded).to.be.false

        
        clients.forEach(client => {

            expect(client).to.exist
            
           

        })
    })

       
    it('should succeed fail when no client in idRoute', async () => {
        const wrongLocationId = '452154215421'
        try {
            await listClients(id, wrongLocationId)

            throw Error('should not reach this point')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`route with id ${wrongLocationId} not found`)
        }
        
    })

    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()]).then(database.disconnect))
})