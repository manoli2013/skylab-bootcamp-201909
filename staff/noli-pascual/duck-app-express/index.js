const express = require('express')
const templateHead = require('./helpers/template-head.js')
const Landing = require('./components/landing')
const Register = require('./components/register')
const Login = require('./components/login')
const querystring = require('querystring')
const registerUser = require('./logic/register-user')
const Feedback = require('./components/feedback')
const authenticateUser = require('./logic/authenticate-user')
const Search = require('./components/search')
const searchDucks = require('./logic/search-ducks')
const retrieveUser= require('./logic/retrieve-user')


const { argv: [, , port = 8080] } = process

//aquí guardaremos mediante asignación de propiedades las sesiones de usuarios
const sessions = {}

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send( templateHead(Landing({ register: '/register', login: '/login', })) )
})

app.get('/register', (req, res) => {
    res.send( templateHead(Register()) )
})

app.get('/login', (req, res) => {
    res.send( templateHead(Login({path: '/login'})) )
})

app.get('/search', (req, res) => {
    res.send( templateHead(Search()) )
})

app.post('/register', (req, res) => {
    
    let content = ''

    req.on('data', chunk => content += chunk)

    req.on('end', () => {
        
        const { name, surname, email, password } = querystring.parse(content)

        try {
            registerUser(name, surname, email, password, (error => {
                if(error) res.send( templateHead(Feedback()))
                else res.redirect('/login')
            }))
        } catch (error) {
            res.send( templateHead(Feedback()))
        }  
    })
})

app.post('/login', (req, res) => {
    
    let content = ''

    req.on('data', chunk => content += chunk)

    req.on('end', () => {
        
        const { email, password } = querystring.parse(content)

        try {
            authenticateUser(email, password, (error,credentials) => {
                
                if(error) return res.send( templateHead(Feedback()))

                const {id, token} = credentials

                //agregamos a sesiones el usuario

                sessions.id = token

                //agregamos a cookie mediante headers, con el identificador del id

                res.setHeader('set-cookie', `id = ${id}`)

                res.redirect('/search')     
        
            })

        } catch (error) {
            res.send( templateHead(Feedback()))
        }  
    })
})

app.get('/search', (req, res) => {
    
    try {
        
    } catch (error) {
        
    }

})

try {
                    
    const { id, token } = credentials
    retrieveUser(id, token, (error, userData) =>{
        
        if(error) return res.send(templateHead(Feedback()))
        const {name, surname} = userData
        
        res.redirect('/search')
        res.send(templateHead(Search({ name, surname }) ))
        

})} catch (error) {
    res.send( templateHead(Feedback()))
}

app.listen(port, () => console.log(`server running on port ${port}`))
