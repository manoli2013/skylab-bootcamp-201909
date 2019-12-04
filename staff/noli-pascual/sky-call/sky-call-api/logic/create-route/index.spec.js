require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const createRoute = require('.')
const { random } = Math
const { errors: { ContentError } } = require('sky-call-util')
const { database, models: { Route, User} } = require('sky-call-data')

describe('logic - create-route', () => {
    before(() => database.connect(TEST_DB_URL))

    let location, statusRoute

    beforeEach( async () => {

        //user admin
        name = `name-${random()}`
        surname = `surname-${random()}`
        username = `username-${random()}`
        password = `password-${random()}`
        role = 'admin'

        location = 'Barcelona'
        statusRoute = 'active'

        await Promise.all([User.deleteMany(), Route.deleteMany()])


        const user = await User.create({ name, surname, username, password, role})

        id = user.id
    })

    it('should succeed on correct location', async () => {

        let routeId = await createRoute(id, location, statusRoute)

        expect(routeId).to.exist

        route = await Route.findById(routeId)

        expect(route).to.exist
        expect(route.id).to.equal(route.id)

        expect(route.location).to.equal(location)
        expect(typeof route.location).to.be.a('string')

    })


    it('should fail on already existing location', async () => {
        
        const newRoute = await Route.create({user: id, location, statusRoute: 'pasive'})

        try {
            await createRoute(id, 'Barcelona', 'active')

            throw Error('should not reach this point')

        } catch (error) {
            
            expect(error).to.exist

            expect(error.message).to.exist
            expect(typeof error.message).to.equal('string')
            expect(error.message.length).to.be.greaterThan(0)
            expect(error.message).to.equal(`route with location ${location} already exists`)
        }
    })



// TODO other cases

after(() => Promise.all([User.deleteMany(), Route.deleteMany()]).then(database.disconnect))
})