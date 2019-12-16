const TEST_DB_URL = process.env.REACT_APP_TEST_DB_URL
const registerUser = require('.')
const { random } = Math
const { errors: { ContentError } } = require('sky-call-util')
const { database, models: { User } } = require('sky-call-data')


describe.only('logic - register user', () => {
    beforeAll(() => database.connect(TEST_DB_URL))

    let name, surname, username, password, role

    beforeEach(() => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        username = `username-${random()}`
        password = `password-${random()}`
        role = 'agent'
       
        return User.deleteMany()
    })

    it('should succeed on correct credentials', async () => {
        
        const response = await registerUser(name, surname, username, password, role)

        expect(response).toBeUndefined()

        const user = await User.findOne({ username })
        
        expect(user).toBeDefined()

        expect(user.name).toBe(name)
        expect(user.surname).toBe(surname)
        expect(user.username).toBe(username)
        
    })

    describe.only('when user already exists', () => {
       

        it('should fail on already existing user', async () => {
            try {
                await registerUser(name, surname, username, password, role)

                throw Error('should not reach this point')
            } catch (error) {
                expect(error).toBeDefined()
                
                expect(error.message).toBeDefined()
                expect(typeof error.message).toBe('string')
                expect(error.message.length).toBeGreaterThan(0)
                expect(error.message).toBe(`user with username ${eusername} already exists`)
            }
        })
    })

    it('should fail on incorrect name, surname, email, password, or expression type and content', () => {
        expect(() => registerUser(1)).toThrow(TypeError, '1 is not a string')
        expect(() => registerUser(true)).toThrow(TypeError, 'true is not a string')
        expect(() => registerUser([])).toThrow(TypeError, ' is not a string')
        expect(() => registerUser({})).toThrow(TypeError, '[object Object] is not a string')
        expect(() => registerUser(undefined)).toThrow(TypeError, 'undefined is not a string')
        expect(() => registerUser(null)).toThrow(TypeError, 'null is not a string')

        expect(() => registerUser('')).toThrow(ContentError, 'name is empty or blank')
        expect(() => registerUser(' \t\r')).toThrow(ContentError, 'name is empty or blank')

        expect(() => registerUser(name, 1)).toThrow(TypeError, '1 is not a string')
        expect(() => registerUser(name, true)).toThrow(TypeError, 'true is not a string')
        expect(() => registerUser(name, [])).toThrow(TypeError, ' is not a string')
        expect(() => registerUser(name, {})).toThrow(TypeError, '[object Object] is not a string')
        expect(() => registerUser(name, undefined)).toThrow(TypeError, 'undefined is not a string')
        expect(() => registerUser(name, null)).toThrow(TypeError, 'null is not a string')

        expect(() => registerUser(name, '')).toThrow(ContentError, 'surname is empty or blank')
        expect(() => registerUser(name, ' \t\r')).toThrow(ContentError, 'surname is empty or blank')

        expect(() => registerUser(name, surname, 1)).toThrow(TypeError, '1 is not a string')
        expect(() => registerUser(name, surname, true)).toThrow(TypeError, 'true is not a string')
        expect(() => registerUser(name, surname, [])).toThrow(TypeError, ' is not a string')
        expect(() => registerUser(name, surname, {})).toThrow(TypeError, '[object Object] is not a string')
        expect(() => registerUser(name, surname, undefined)).toThrow(TypeError, 'undefined is not a string')
        expect(() => registerUser(name, surname, null)).toThrow(TypeError, 'null is not a string')

        expect(() => registerUser(name, surname, '')).toThrow(ContentError, 'e-mail is empty or blank')
        expect(() => registerUser(name, surname, ' \t\r')).toThrow(ContentError, 'e-mail is empty or blank')

        expect(() => registerUser(name, surname, email, 1)).toThrow(TypeError, '1 is not a string')
        expect(() => registerUser(name, surname, email, true)).toThrow(TypeError, 'true is not a string')
        expect(() => registerUser(name, surname, email, [])).toThrow(TypeError, ' is not a string')
        expect(() => registerUser(name, surname, email, {})).toThrow(TypeError, '[object Object] is not a string')
        expect(() => registerUser(name, surname, email, undefined)).toThrow(TypeError, 'undefined is not a string')
        expect(() => registerUser(name, surname, email, null)).toThrow(TypeError, 'null is not a string')

        expect(() => registerUser(name, surname, email, year, 1)).toThrow(TypeError, '1 is not a string')
        expect(() => registerUser(name, surname, email, year, true)).toThrow(TypeError, 'true is not a string')
        expect(() => registerUser(name, surname, email, year, [])).toThrow(TypeError, ' is not a string')
        expect(() => registerUser(name, surname, email, year, {})).toThrow(TypeError, '[object Object] is not a string')
        expect(() => registerUser(name, surname, email, year, undefined)).toThrow(TypeError, 'undefined is not a string')
        expect(() => registerUser(name, surname, email, year, null)).toThrow(TypeError, 'null is not a string')

        expect(() => registerUser(name, surname, email, year, month, 1)).toThrow(TypeError, '1 is not a string')
        expect(() => registerUser(name, surname, email, year, month, true)).toThrow(TypeError, 'true is not a string')
        expect(() => registerUser(name, surname, email, year, month, [])).toThrow(TypeError, ' is not a string')
        expect(() => registerUser(name, surname, email, year, month, {})).toThrow(TypeError, '[object Object] is not a string')
        expect(() => registerUser(name, surname, email, year, month, undefined)).toThrow(TypeError, 'undefined is not a string')
        expect(() => registerUser(name, surname, email, year, month, null)).toThrow(TypeError, 'null is not a string')

        expect(() => registerUser(name, surname, email, year, month, day, '')).toThrow(ContentError, 'password is empty or blank')
        expect(() => registerUser(name, surname, email, year, month, day, ' \t\r')).toThrow(ContentError, 'password is empty or blank')

        expect(() => registerUser(name, surname, email, year, month, day, password, '')).toThrow(ContentError, 'passwordconfirm is empty or blank')
        expect(() => registerUser(name, surname, email, year, month, day, password, ' \t\r')).toThrow(ContentError, 'passwordconfirm is empty or blank')
    })

    afterAll(() => User.deleteMany().then(database.disconnect))
})