require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random } = Math
const updateUser = require('.')
const { errors: { NotFoundError } } = require('sky-call-util')
const { database, models: { User, Client, Route }, ObjectId } = require('sky-call-data')

describe('logic - update client', () => {
    before(() => database.connect(TEST_DB_URL))
    let name, surname, username, password, role
    let idRoute, location
    let idClient, nameClient, surnameClient, tel, address

    beforeEach(async () => {

        //create user admin
        name = `name-${random()}`
        surname = `surname-${random()}`
        username = `username-${random()}`
        password = `password-${random()}`
        role = 'admin'

        //create user agent
        nameAgent = `name-${random()}`
        surnameAgent = `surname-${random()}`
        usernameAgent = `username-${random()}`
        passwordAgent = `password-${random()}`
        roleAgent = 'role'


        //new data

        newName = 'new-name'
        newSurname = 'new-surname'
        newPassword = 'new-password'

        await Promise.all([User.deleteMany()])

        
        const admin = await User.create({ name, surname, username, password, role })
        id = admin.id

        const agent = await User.create({ name: nameAgent, name: surnameAgent, username: usernameAgent, password: passwordAgent, role: roleAgent })
        idagent = agent.id
       
        
    })

    it('should succeed on correct user id', async () => {

        const newUser = await updateUser(id, idAgent, newName, newSurname, newPassword)

        expect(newUser).to.exist
        
        expect(newUser.name).to.equal(newNameClient)
        expect(newUser.surname).to.equal(newSurnameClient)
        expect(newUser.password).to.equal(newPassword)
    

    })
    it('should fail on wrong admin id', async () => {
        const id2 = '251452145858'

        try {
            await updateUser(id, id2, newName, newSurname, newPassword)

            throw Error('should not reach this point')

        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`user with id ${id2} not found`)
        }
    })
    // it('should fail on wrong client id', async () => {
    //     const wrongClientId = '251452145858'

    //     try {
    //         await updateClient(id, wrongClientId, newNameClient, newSurnameClient, newTel, idRoute2, newAddress)

    //         throw Error('should not reach this point')

    //     } catch (error) {
    //         expect(error).to.exist
    //         expect(error).to.be.an.instanceOf(NotFoundError)
    //         expect(error.message).to.equal(`client with id ${wrongClientId} not found`)
    //     }
    // })


    after(() => Promise.all([User.deleteMany(), Client.deleteMany(), Route.deleteMany()]).then(database.disconnect))
})