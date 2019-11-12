//requerimos express
const express = require('express')

//creamos index para components y para logic, y para middlewares
//aquí destructuring para llamarlos a todos

const { View, Landing, Register, Login, Search, Detail } = require('./components')
const { registerUser, authenticateUser, retrieveUser, searchDucks, retrieveDuck, retrieveFavDucks, toggleFavDuck } = require('./logic')
// const logic = require('./logic')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const pug = require('pug')

//???
const { argv: [, , port = 8080] } = process


//llamamos a express
const app = express()

app.set('view engine', 'pug')
app.set('views', 'components')


//para estilos lo ponemos en la carpeta estática public
app.use(express.static('public'))


///sesiones

app.use(session({
    store: new FileStore({
    }),
    secret: 'a super secret thing',
    saveUninitialized: true,
    resave: true
}))

const formBodyParser = bodyParser.urlencoded({ extended: false })

//GET para visualizar la home desde el navegador
app.get('/', (req, res) => {
    res.send(View({ body: Landing({ register: '/register', login: '/login' }) }))
})

//GET para visualizar la página del registro desde el navegador
app.get('/register', (req, res) => {

    console.log('GET register')
        console.log(req.params)
        console.log(req.param.name)
        console.log(req.query)
        console.log(req.body)
        console.log(req.headers)
        console.log(req.xhr)
        console.log(req.url)
    // res.send(View({ body: Register({ path: '/register' }) }))
    //NOVEDAD
    res.render('register', {path: '/register'})
})

//POST para enviar datos a la api de usuarios
//bodyparser transforma lo que nos ponene en el form de registro a json
//el compo register tendrá como método también 'post'
app.post('/register', formBodyParser, (req, res) => {
    const { body: { name, surname, email, password } } = req

    try {
        //llama a la api e intenta reg al usuario
        registerUser(name, surname, email, password)

            //si va bien, la promesa se resolve() (lógica)
            .then(() => res.redirect('/'))

            //si la llamada va bien pero devuelve un error (ej el usuario ya existe)
            .catch(({ message }) => res.send(View({ body: Register({ path: '/register', error: message }) })),
            console.log('el usuario ya existe'))
    
    }   //si ha ido algo mal en la llamada a la API
        catch ({ message }) {
        res.send(View({ body: Register({ path: '/register', error: message }) }), console.log('formulario mal rellenado'))
    }
})

//get para visualizar la pantalla de login

app.get('/login', (req, res) => {
    res.send(View({ body: Login({ path: '/login' }) }))
})

//post para enviar datos a la api en una req 
app.post('/login', formBodyParser, (req, res) => {
    const { session, body: { email, password } } = req

    try {
        authenticateUser(email, password)
            .then(credentials => {
                const { id, token } = credentials

                session.userId = id
                session.token = token

                session.save(() => res.redirect('/search'))
            })
            .catch(({ message }) => {
                res.send(View({ body: Login({ path: '/login', error: message }) }))
            })
    } catch ({ message }) {
        res.send(View({ body: Login({ path: '/login', error: message }) }))
    }
})

//get para visualizar en el navegador la ruta search

app.get('/search', (req, res) => {
    console.log('GET SEARCH')
   
    try {

        console.log(req.query)
   
        const { session, query: { q: query } } = req
        
        //cuando vayas a search, si no estás logeado, te devuelve a landing.
       
        if (!session) return res.redirect('/')
        
        const { userId: id, token } = session

        if (!token) return res.redirect('/')

        let name

        //va a la API a buscar el usuario con el id y el token. Nos devuelve sus datos. Name, surname, email, 
        retrieveUser(id, token)
            .then(user => { //los englobamos todos en user

                
                name = user.name //convertimos en global a name

                if (!query) return res.send(View({ body: Search({ path: '/search', name, logout: '/logout', favsPath: '/favs'}) }))

                
                //con la info del user y la query busca patitos
                //pinta el search, con la query, el name, logout, ducks (mirar compo)
                return searchDucks(id, token, query) //para q era? q forzaba el return? que devuelva la promise?

                    //ahora result q llega es ducks
                    .then(ducks => {
                        session.query = query
                        session.view = 'search'

                        session.save(() => res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', results: ducks, favPath: '/fav', favsPath: '/favs', detailPath: '/ducks' }) })))
                    })
                    
            })
            .catch(({ message }) => res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) })))
    } catch ({ message }) {
        res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) }))
    }
})

app.post('/logout', (req, res) => {
    const { session } = req

    session.destroy(() => {
        res.clearCookie('connect.sid', { path: '/' })
        // res.setHeader('set-cookie', 'connect.sid=""; expires=Thu, 01 Jan 1970 00:00:00 GMT')

        res.redirect('/')
    })
})

app.post('/fav', formBodyParser, (req, res) => {
    try {
        const { session, body: { id: duckId }, headers: { referer } } = req

        if (!session) return res.redirect('/')

        const { userId: id, token } = session

        if (!token) return res.redirect('/')

        toggleFavDuck(id, token, duckId)
            .then(() => res.redirect(referer))
            .catch(({ message }) => {
                res.send('TODO error handling')
            })
    } catch ({ message }) {
        res.send('TODO error handling')
    }
})

app.get('/ducks/:id', (req, res) => {
    try {
        const { session, params: { id: duckId } } = req

        if (!session) return res.redirect('/')

        const { userId: id, token, view, query } = session

        if (!token) return res.redirect('/')

        retrieveDuck(id, token, duckId)
            .then(duck =>
                res.send(View({ body: Detail({ item: duck, backPath: view === 'search' ? `/search?q=${query}` : '/favs', favPath: '/fav' }) }))
            )
            .catch(({ message }) =>
                res.send('TODO error handling')
            )
    } catch ({ message }) {
        res.send('TODO error handling')
    }
})

app.get('/favs', (req, res) => {
    console.log('GET FAVS')
   
    try {

const { session, query: { q: query } } = req
// ​
//         if (!session) return res.redirect('/login')
        
        const { userId: id, token } = session
        
        if (!token) return res.redirect('/login')
        
        let name


        retrieveUser(id, token)
        .then(user => {
            name = user.name

            return retrieveFavDucks(id, token)
            
            .then(favList => {
                console.log(favList)

                session.query = query
                session.view = 'favs'
                session.save(() => res.send(View({ body: Search({ FavsPath: '/favs', query, name, logout: '/logout', results: favList, favPath: '/fav', detailPath: '/ducks'}) })))
                
            })
                
            .catch(({ message }) => res.send('TODO error handling retrieve'))

        })
                
    } catch ({ message }) {
        res.send('TODO error handling try')
    } 
})

app.post('/back', formBodyParser, (req, res) => {
   
    const { session } = req
    
    if (!session) return res.redirect('/')

    const { token, query } = session

    if (!token) return res.redirect('/')

    res.redirect(`/search?q=${query}`)
})

app.listen(port, () => console.log(`server running on port ${port}`))

