const { env: { REACT_APP_TEST_DB_URL: TEST_DB_URL, REACT_APP_TEST_SECRET: TEST_SECRET } } = process
const createTask = require('.')
const { random } = Math
// const { errors: { NotFoundError } } = require('tasks-util')
const { database, models: { User, Task} } = require('tasks-data')
const jwt = require('jsonwebtoken')

describe('logic - create task', () => {
    beforeAll(() => database.connect(TEST_DB_URL))

    let id, token, name, surname, email, username, password, title, description

    beforeEach(async () => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@mail.com`
        username = `username-${random()}`
        password = `password-${random()}`

        await Promise.all([User.deleteMany(), Task.deleteMany()])

        const user = await User.create({ name, surname, email, username, password })

        id = user.id
        //extract token
        token = jwt.sign({ sub: id }, TEST_SECRET)

        title = `title-${random()}`
        description = `description-${random()}`
    })

    it('should succeed on correct user and task data', async () => {
        const taskId = await createTask(token, title, description)

        expect(token).toBeDefined()
        expect(typeof token).toBe('string')
        expect(token.length).toBeGreaterThan(0)
        
        expect(taskId).toBeDefined()
        expect(typeof taskId).toBe('string')
        expect(taskId.length).toBeGreaterThan(0)

        const task = await Task.findById(taskId)

        expect(task).toBeDefined()
        expect(task.user.toString()).toBe(id)
        expect(task.title).toBe(title)
        expect(task.description).toBe(description)
        expect(task.status).toBe('TODO')
        expect(task.date).toBeDefined()
        expect(task.date).toBeInstanceOf(Date)
    })

    // TODO other test cases

    afterAll(() => Promise.all([User.deleteMany(), Task.deleteMany()]).then(database.disconnect))
})