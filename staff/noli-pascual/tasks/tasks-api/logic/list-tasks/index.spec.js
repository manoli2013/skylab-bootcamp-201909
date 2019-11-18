require('dotenv').config()
const { env: { DB_URL_TEST } } = process
const { expect } = require('chai')
const listTasks = require('.')
const { random } = Math

//middleware  //VES MI CONSOLA ABAJO??
const database = require('../../utils/database')
const { ObjectId } = database

const uuid = require('uuid')

describe('logic - list tasks', () => {

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

    let id, name, surname, email, username, password

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
                debugger
                const task1 = {
                    user: ObjectId(id),
                    title: `title-${random()}`,
                    description: `description-${random()}`,
                    status: 'TODO',
                    date: new Date
                }

                tasks.insertOne(task1)

                const task2 = {

                    user: ObjectId(id),
                    title: `title-${random()}`,
                    description: `description-${random()}`,
                    status: 'TODO',
                    date: new Date
                }

                tasks.insertOne(task2)
                console.log('TASKS')
                console.log(task2)

            })

    })

    it('should succeed on correct user and task data', () =>
        listTasks(id)
            .then(result => {debugger

                expect(result).to.exist
                // expect(tasks).to.have.lengthOf(10)
                result.forEach(task => {
                    console.log('TASK DEL USER')
                
                    console.log(task.user)
                    expect(task._id.toString()).to.exist
                    expect(task.user.toString()).to.equal(id)
                 
                    
                    expect(task.status).to.be.a('string')
                    expect(task.date).to.be.an.instanceOf(Date)

                    expect(task.title).to.exist
                    expect(task.title).to.be.a('string')
                    expect(task.title).to.have.length.greaterThan(0)
                   

                    expect(task.description).to.exist
                    expect(task.description).to.be.a('string')
                    expect(task.description).to.have.length.greaterThan(0)

                    expect(task.status).to.exist
                    expect(task.status).to.be.a('string')
                    expect(task.status).to.have.length.greaterThan(0)

                    //TODO
                    expect(task.lastAccess).to.exist
                    expect(task.lastAccess).to.be.an.instanceOf(Date)


                });
            })

    )

    // TODO other test cases
})