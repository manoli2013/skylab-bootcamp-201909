require('dotenv').config()
const { env: { DB_URL_TEST }} = process
const { expect } = require('chai')
const { random } = Math
const database = require('../../utils/database')
const retrieveUser = require('.')
const { NotFoundError } = require('../../utils/errors')

describe('logic - retrieve user', () => {
    let client, users

    before(() => {
        client = database(DB_URL_TEST)

        return client.connect()
            .then(connection => users = connection.db().collection('users'))
    })

    let id, name, surname, email, username, password

    beforeEach(() => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@mail.com`
        username = `username-${random()}`
        password = `password-${random()}`

        return users.insertOne({ name, surname, email, username, password })
            .then(({ insertedId }) => id = insertedId.toString())
    })

    it('should succeed on correct user id', () =>
        retrieveUser(id)
            .then(user => {
                expect(user).to.exist
                expect(user.id).to.equal(id)
                expect(user._id).to.not.exist
                expect(user.name).to.equal(name)
                expect(user.surname).to.equal(surname)
                expect(user.email).to.equal(email)
                expect(user.username).to.equal(username)
                expect(user.password).to.be.undefined
            })
    )

    it('should fail on wrong user id', () => {
        const id = '012345678901234567890123'

        return retrieveUser(id)
            .then(() => {
                throw Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.an.instanceOf(NotFoundError)
                expect(error.message).to.equal(`user with id ${id} not found`)
            })
    })

    // TODO other cases

    after(() => client.close())
})


// require('dotenv').config()
// const { env: { DB_URL_TEST } } = process
// const { expect } = require('chai')
// const { random } = Math

// const retrieveUser = require('.')
// const database = require('../../utils/database')
// const {ObjectId} = database
// const { NotFoundError } = require('../../utils/errors')

// describe('logic - retrieve user', () => {

//     let client, users

//     before(() => {
//         client = database(DB_URL_TEST)

//         return client.connect()
//             .then(connection => {
//                 const db = connection.db()

//                 users = db.collection('users')
                
//             })
//     })

//     let id, name, surname, email, username, password, lastAccess

//     beforeEach(() => {
     
//         name = `name-${random()}`
//         surname = `surname-${random()}`
//         email = `email-${random()}@mail.com`
//         username = `username-${random()}`
//         password = `password-${random()}`

//         return users.insertOne({ name, surname, email, username, password, lastAccess})
//             .then(result => {
//                 id = result.insertedId.toString()
//             })
//     })

//     it('should succeed on correct user id', () =>
//         retrieveUser(id)
//             .then(user => {debugger
//                 expect(user).to.exist
//                 expect(user.id.toString()).to.equal(id)
//                 expect(user.name).to.equal(name)
//                 expect(user.surname).to.equal(surname)
//                 expect(user.email).to.equal(email)
//                 expect(user.username).to.equal(username)
//                 expect(user.password).to.be.undefined
//                 // expect(user.lastAccess).to.be.an.instanceOf(Date)
//             })
//     )

//     it('should fail on wrong user id', () => {
//         const id = 'wrong'

//         return retrieveUser(id)
//             .then(() => {
//                 throw new Error('should not reach this point')
//             })
//             .catch(error => {
//                 console.log(error)
//                 expect(error).to.exist
              
//                 expect(error.message).to.equal('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters')
//             })
//     })

//     it('should fail on wrong user id 12 bytes', () => {
//         const id = '123456789145'

//         return retrieveUser(id)
//             .then(() => {
//                 throw new Error('should not reach this point')
//             })
//             .catch(error => {
//                 console.log(error)
//                 expect(error).to.exist
//                 expect(error).to.be.an.instanceOf(NotFoundError)
                
//             })
//     })

   
// })