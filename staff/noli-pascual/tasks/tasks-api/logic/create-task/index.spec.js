require('dotenv').config()
const { env: { DB_URL_TEST } } = process
const { expect } = require('chai')
const createTask = require('.')
const { random } = Math
const { NotFoundError, ContentError } = require('../../utils/errors')
const { database, models: { User, Task } } = require('../../data')

describe.only('logic - create task', () => {
    before(() => database.connect(DB_URL_TEST))

    let id, name, surname, email, username, password, title, description

    beforeEach(() => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@mail.com`
        username = `username-${random()}`
        password = `password-${random()}`

        return Promise.all([User.deleteMany(), Task.deleteMany()])
            .then(() => User.create({ name, surname, email, username, password }))
            .then(user => {
                id = user.id

                title = `title-${random()}`
                description = `description-${random()}`
            })

    })

    it('should succeed on correct user and task data', () =>
        createTask(id, title, description)
            .then(taskId => {
                expect(taskId).to.exist
                expect(taskId).to.be.a('string')
                expect(taskId).to.have.length.greaterThan(0)

                return Task.findById(taskId)
            })
            .then(task => {
                expect(task).to.exist
                expect(task.user.toString()).to.equal(id)
                expect(task.title).to.equal(title)
                expect(task.description).to.equal(description)
                expect(task.status).to.equal('TODO')
                expect(task.date).to.exist
                expect(task.date).to.be.instanceOf(Date)
            })
    )

    it('should fail on wrong user', () =>
        createTask('566543323456', title, description)
            
        .then(() => { throw new Error('should not reach this point') })
        
        .catch(error => {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)

            const { message } = error
            expect(message).to.equal(`user with id 566543323456 not found`)
        })
    )

    it('should fail on not valid user', () =>
        createTask('56654332', title, description)
            
        .then(() => { throw new Error('should not reach this point') })
        
        .catch(error => {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(Error)

            const { message } = error
            expect(message).to.equal('56654332 is not a valid id')
        })
    )

    // TODO other test cases

    after(() => Promise.all([User.deleteMany(), Task.deleteMany()]).then(database.disconnect))
})