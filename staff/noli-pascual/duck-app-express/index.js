const express = require('express')
const templateHead = require('./helpers/template-head.js')
const Landing = require('./components/landing')
const Register = require('./components/register')
const Login = require('./components/login')
const querystring = require('querystring')
const registerUser = require('./logic/register-user')
const Feedback = require('./components/feedback')


const { argv: [, , port = 8080] } = process

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send( templateHead(Landing({ register: '/register', login: '/login', })) )
})

app.get('/register', (req, res) => {
    res.send( templateHead(Register()) )
})

app.get('/login', (req, res) => {
    res.send( templateHead(Login()) )
})

app.post('/register', (req, res) => {
    
    let content = ''

    req.on('data', chunk => {
        
        content += chunk
    })

    req.on('end', () => {
        
        const { name, surname, email, password } = querystring.parse(content)

        try {
            registerUser(name, surname, email, password, (error => {
                if(error) res.send( templateHead(Feedback()))
                else res.send( templateHead(Login()))
            }))
        } catch (error) {
            res.send( templateHead(Feedback()))
        }
        
    })
})
app.listen(port, () => console.log(`server running on port ${port}`))
