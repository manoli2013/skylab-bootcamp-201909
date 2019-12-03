require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { errors: { NotFoundError } } = require('sky-call-util')
const searchClients = require('.')
const { random } = Math
const { database, ObjectId, models: { User, Client, Route, Call } } = require('sky-call-data')

describe('logic - search clients', () => {
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

        await Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany(), Call.deleteMany()])

        const user = await User.create({ name, surname, username, password, role })
        id = user.id

        //creo rutas
        location = 'Barcelona'

        const route = await Route.create({ location })
        idRoute = route.id

        //creo clients de la ruta
        

        const clientNotAnswering1 = {
            creator: id,
            nameClient: `name-${random()}`,
            surnameClient: `surname-${random()}`,
            tel: `tel- ${random()}`,
            location: idRoute,
            address: `address-${random()}`,
            
        }
        const clientNotAnswering2 = {
            creator: id,
            nameClient: `name-${random()}`,
            surnameClient: `surname-${random()}`,
            tel: `tel- ${random()}`,
            location: idRoute,
            address: `address-${random()}`,
           
        }
        const clientAnswered = {
            creator: id,
            nameClient: `name-${random()}`,
            surnameClient: `surname-${random()}`,
            tel: `tel- ${random()}`,
            location: idRoute,
            address: `address-${random()}`,
           
        }


        const client1 = await Client.create(clientAnswered)
       
        const client2 = await Client.create(clientNotAnswering1)

       
        const call1= await Call.create({agent: id, client: client1.id, statusCall: 'A'})
        
        const call2= await Call.create({agent: id, client: client1.id, statusCall: 'N.A'})
 
        
        client1.callIds.push(call1.id)
        await client1.save()

        client2.callIds.push(call2.id)
        await client2.save()

    })

    it('should succeed listing clients by status A', async () => {
        
        const clients = await searchClients(id, 'A')

        expect(clients).to.exist
        // expect(clients).to.have.lengthOf(5)

        clients.forEach(client => {

            expect(client.id).to.exist

            expect(client.id).to.be.a('string')

            expect(client.location.toString()).to.equal(idRoute)

            expect(client.creator.toString()).to.equal(id)

        })
    })


    // it('should succeed fail when no client in idRoute', async () => {
    //     const wrongLocationId = '452154215421'
    //     try {
    //         await listClients(wrongLocationId)

    //         throw Error('should not reach this point')
    //     } catch (error) {
    //         expect(error).to.exist
    //         expect(error).to.be.an.instanceOf(NotFoundError)
    //         expect(error.message).to.equal(`No clients in route ${wrongLocationId}`)
    //     }

    // })

    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()], Call.deleteMany()).then(database.disconnect))
})