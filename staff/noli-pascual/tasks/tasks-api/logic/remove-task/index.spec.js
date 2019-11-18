require('dotenv').config()
const { env: { DB_URL_TEST } } = process
const { expect } = require('chai')
const removeTask = require('.')
const { random } = Math
const database = require('../../utils/database')
const { ObjectId } = database

describe('logic - remove task', () => {
    let client, users, tasks

    before(() => {
        client = database(DB_URL_TEST)

        return client.connect()
            .then(connection => {
                const db = connection.db()

                users = db.collection('users')
                tasks = db.collection('tasks')
            })
    })

    let id, name, surname, email, username, password, title, description

    beforeEach(() => {

        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@mail.com`
        username = `username-${random()}`
        password = `password-${random()}`

        //rellenamos en la collection users 1 registro y devolvemos una promise

        return users.insertOne({ name, surname, email, username, password })
            .then(result => {
                id = result.insertedId.toString()

                const task1 = {

                    user: ObjectId(id),
                    title: `title-${random()}`,
                    description: `description-${random()}`,
                    status: 'TODO',
                    date: new Date
                }

                return tasks.insertOne(task1)
                    .then(task => {
                        taskId = task.insertedId.toString()
                    })
            })

    })


    it('should succeed on correct user and task data', () =>
        removeTask(id, taskId)

            .then(response => {

                expect(response).to.not.exist
                const isTask = tasks.findOne({_id: taskId})
                expect(isTask).to.be.empty

            })

    )

    it('should fail on wrong taskId', () =>
        removeTask(id, 1)

            .then(response => {
                console.log(response)
                console.log('should not reach this point')

            })
            .catch(task => {
                expect(task).to.exist
            })

    )

    it('should fail on wrong id', () =>
        removeTask('345', taskId)

            .then(response => {
                console.log(response)
                console.log('should not reach this point')

            })
            .catch(task => {
                expect(task).to.exist
            })

    )
    // TODO other test cases

    after(() => client.close())
})