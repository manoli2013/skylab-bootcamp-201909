require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const createRoute = require('.')
const { random } = Math
const { errors: { ContentError } } = require('sky-call-util')
const { database, models: { Route } } = require('sky-call-data')

describe('logic - create-route', () => {
    before(() => database.connect(TEST_DB_URL))

    let location

    beforeEach(() => {

        location = `location-${random()}`
        
        return Route.deleteMany()
    })

    it('should succeed on correct location', async () => {
        
        let route = await createRoute(location)
        id = route.id
        expect(id).to.exist

        route = await Route.findById( id )

        expect(route).to.exist
        expect(route.id).to.equal(id)

        expect(route.location).to.equal(location)
        expect(typeof route.location).to.be.a('string')
       
    })

    describe('logic - create-route', () => {
        let location

        beforeEach( async () => {
    
            location = `location-${random()}`
            await Route.create({location})
        })
   

        it('should fail on already existing location', async () => {
            try {
                await createRoute(location)

                throw Error('should not reach this point')
            } catch (error) {
                expect(error).to.exist

                expect(error.message).to.exist
                expect(typeof error.message).to.equal('string')
                expect(error.message.length).to.be.greaterThan(0)
                expect(error.message).to.equal(`route with location ${location} already exists`)
            }
        })
    })

    
    // TODO other cases

    after(() => Route.deleteMany().then(database.disconnect))
})