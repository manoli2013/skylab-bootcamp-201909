require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { errors: { NotFoundError } } = require('sky-call-util')
const agentsReport = require('.')
const { random } = Math
const { database, models: { User, Agent, Client, Route, Visit, Call } } = require('sky-call-data')

describe('logic - agents report', () => {
    before(() => database.connect(TEST_DB_URL))
    let user
    let name, surname, username, password, role
    let name1, surname1, username1, password1, role1
    let idClient, nameClient, surnameClient, tel, address, callIds, visits
    let location
    let dateRegister, dateVisit, status

    beforeEach(async () => {

        //create user
        name = `name-${random()}`
        surname = `surname-${random()}`
        username = `username-${random()}`
        password = `password-${random()}`
        role = 'agent'

        //create user1
        name1 = `name-${random()}`
        surname1 = `surname-${random()}`
        username1 = `username-${random()}`
        password1 = `password-${random()}`
        role1 = 'agent'

        //crear ruta
        location = 'Barcelona'

        //crear cliente

        nameClient = `nameClient-${random()}`
        surnameClient = `surnameClient-${random()}`
        tel = `tel-${random()}`
        address = `address-${random()}`
        callIds = []
        visits = []

        //crear visitas
        dateRegister = new Date
        dateVisit = new Date
        status = 'PDTE'

        await Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany(), Visit.deleteMany()])

        //crear en mongo

        const route = await Route.create({ location })
        idRoute = route.id

        //user
        user = await User.create({ name, surname, username, password, role, profile: new Agent() })

        location = idRoute
        idAgent = user.id

        //admin
        const admin = await User.create({ name: 'adminName', surname: 'adminSurname', username: 'adminSurname', password: 'adminPassword', role: 'admin' })
        idAdmin = admin.id

        //cliente
        const client = await Client.create({ creator: idAgent, nameClient, surnameClient, tel, location, address })

        idClient = client.id

        //llamadas

       

        //visitas user1
        let pendingVisit1 = await Visit.create({ agent: idAgent, client: idClient, dateRegister, dateVisit, status: 'PDTE' })
        let pendingVisit2 = await Visit.create({ agent: idAgent, client: idClient, dateRegister, dateVisit, status: 'PDTE' })
        let pendingVisit3 = await Visit.create({ agent: idAgent, client: idClient, dateRegister, dateVisit, status: 'PDTE' })
        let pendingVisit4 = await Visit.create({ agent: idAgent, client: idClient, dateRegister, dateVisit, status: 'PDTE' })
        let pendingVisit5 = await Visit.create({ agent: idAgent, client: idClient, dateRegister, dateVisit, status: 'PDTE' })
        let pendingVisit6 = await Visit.create({ agent: idAgent, client: idClient, dateRegister, dateVisit, status: 'PDTE' })

        user.profile.pendingVisits.push(pendingVisit1.id)
        user.profile.pendingVisits.push(pendingVisit2.id)
        user.profile.pendingVisits.push(pendingVisit3.id)
        user.profile.pendingVisits.push(pendingVisit4.id)
        user.profile.pendingVisits.push(pendingVisit5.id)
        user.profile.pendingVisits.push(pendingVisit6.id)
        await user.save()

        let okVisit1 = await Visit.create({ agent: idAgent, client: idClient, dateRegister, dateVisit, status: 'OK' })
        let okVisit2 = await Visit.create({ agent: idAgent, client: idClient, dateRegister, dateVisit, status: 'OK' })
        let okVisit3 = await Visit.create({ agent: idAgent, client: idClient, dateRegister, dateVisit, status: 'OK' })
        let okVisit4 = await Visit.create({ agent: idAgent, client: idClient, dateRegister, dateVisit, status: 'OK' })
        let okVisit5 = await Visit.create({ agent: idAgent, client: idClient, dateRegister, dateVisit, status: 'OK' })
        let okVisit6 = await Visit.create({ agent: idAgent, client: idClient, dateRegister, dateVisit, status: 'OK' })

        user.profile.successVisits.push(okVisit1.id)
        user.profile.successVisits.push(okVisit2.id)
        user.profile.successVisits.push(okVisit3.id)
        user.profile.successVisits.push(okVisit4.id)
        user.profile.successVisits.push(okVisit5.id)
        user.profile.successVisits.push(okVisit6.id)

        await user.save()


        //user2
        const user2 = await User.create({ name: name1, surname: surname1, username: username1, password: password1, role: role1, profile: new Agent() })

        idAgent2 = user2.id

        //visitas user1
        let pendingVisit7 = await Visit.create({ agent: idAgent2, client: idClient, dateRegister, dateVisit, status: 'PDTE' })
        let pendingVisit8 = await Visit.create({ agent: idAgent2, client: idClient, dateRegister, dateVisit, status: 'PDTE' })
        let pendingVisit9 = await Visit.create({ agent: idAgent2, client: idClient, dateRegister, dateVisit, status: 'PDTE' })
        let pendingVisit10 = await Visit.create({ agent: idAgent2, client: idClient, dateRegister, dateVisit, status: 'PDTE' })
        let pendingVisit11 = await Visit.create({ agent: idAgent2, client: idClient, dateRegister, dateVisit, status: 'PDTE' })
        let pendingVisit12 = await Visit.create({ agent: idAgent2, client: idClient, dateRegister, dateVisit, status: 'PDTE' })

        user2.profile.pendingVisits.push(pendingVisit7.id)
        user2.profile.pendingVisits.push(pendingVisit8.id)
        user2.profile.pendingVisits.push(pendingVisit9.id)
        user2.profile.pendingVisits.push(pendingVisit10.id)
        user2.profile.pendingVisits.push(pendingVisit11.id)
        user2.profile.pendingVisits.push(pendingVisit12.id)
        await user2.save()
       

        let okVisit7 = await Visit.create({ agent: idAgent2, client: idClient, dateRegister, dateVisit, status: 'OK' })
        let okVisit8 = await Visit.create({ agent: idAgent2, client: idClient, dateRegister, dateVisit, status: 'OK' })
        let okVisit9 = await Visit.create({ agent: idAgent2, client: idClient, dateRegister, dateVisit, status: 'OK' })
        let okVisit10 = await Visit.create({ agent: idAgent2, client: idClient, dateRegister, dateVisit, status: 'OK' })
        let okVisit11 = await Visit.create({ agent: idAgent2, client: idClient, dateRegister, dateVisit, status: 'OK' })
        let okVisit12 = await Visit.create({ agent: idAgent2, client: idClient, dateRegister, dateVisit, status: 'OK' })

        user2.profile.successVisits.push(okVisit7.id)
        user2.profile.successVisits.push(okVisit8.id)
        user2.profile.successVisits.push(okVisit9.id)
        user2.profile.successVisits.push(okVisit10.id)
        user2.profile.successVisits.push(okVisit11.id)
        user2.profile.successVisits.push(okVisit12.id)

        await user2.save()

        const call1 = await Call.create({agent: idAgent, client: idClient, statusCall: 'N.A'})
        const call2 = await Call.create({agent: idAgent2, client: idClient, statusCall: 'A'})

        const call3 = await Call.create({agent: idAgent, client: idClient, statusCall: 'N.A'})
        const call4 = await Call.create({agent: idAgent2, client: idClient, statusCall: 'A'})

        const call5 = await Call.create({agent: idAgent, client: idClient, statusCall: 'N.A'})
        const call6 = await Call.create({agent: idAgent2, client: idClient, statusCall: 'A'})
    })

    it('should succeed listing all agents', async () => {
       
        const agents = await agentsReport(idAdmin)

        agents.forEach(agent => {
            expect(agent.name).to.exist
            expect(agent.surname).to.be.a('string')
            expect(typeof agent.calls).to.equal('number')
        
            expect(typeof agent.fail).to.equal('number')
            expect(agent.success).that.is.a('number')
            expect(typeof agent.pending).to.equal('number')
            expect(typeof agent.pendingCalls).to.equal('number')

            // expect(agent.visits).to.be.equal(agent.fail + agent.success + agent.pending)
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

    
    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany(), Visit.deleteMany()]).then(database.disconnect))
})