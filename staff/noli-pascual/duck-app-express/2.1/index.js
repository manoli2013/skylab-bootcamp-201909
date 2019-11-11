//requerimos express
const express = require('express')

//creamos index para components y para logic, y para middlewares
//aquí destructuring para llamarlos a todos

const { View, Landing, Register, Login, Search, Detail } = require('./components')
const { registerUser, authenticateUser, retrieveUser, searchDucks, retrieveDuck, toggleFavDuck } = require('./logic')
// const logic = require('./logic')
const { bodyParser, cookieParser } = require('./utils/middlewares')

//???
const { argv: [, , port = 8080] } = process


//para agregar sesiones de los usuarios
const sessions = {}

//llamamos a express
const app = express()

//para estilos lo ponemos en la carpeta estática public
app.use(express.static('public'))


//RUTAS

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
    res.send(View({ body: Register({ path: '/register' }) }))
})

//POST para enviar datos a la api de usuarios
//bodyparser transforma lo que nos ponene en el form de registro a json
//el compo register tendrá como método también 'post'
app.post('/register', bodyParser, (req, res) => {
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
app.post('/login', bodyParser, (req, res) => {
    console.log('POST Login')
        console.log(req.params)
        console.log(req.param.name)
        console.log(req.query)
        console.log(req.body)
        console.log(req.headers)
        console.log(req.xhr)
        console.log(req.url)
    // en la req va el mail y password. Aun no hay respuesta

    const { body: { email, password } } = req


    try {
        // al destructurar podemos usar estos parámetros para autenticarnos

        authenticateUser(email, password)

            //usuario autenticado: devuelve id y token
            .then(credentials => {

                //extraemoss id y token de la res
                const { id, token } = credentials

                //añadimos una prop al objeto sessions que sea el id del user, cuyo valor sea el token.
                sessions[id] = { token }


                //????????????????? dónde lo veo
                res.setHeader('set-cookie', `id=${id}`)

                res.redirect('/search')
               
                
            })
            .catch(({ message }) => {
                res.send(View({ body: Login({ path: '/login', error: message }) }))
            })
    } catch ({ message }) {
        res.send(View({ body: Login({ path: '/login', error: message }) }))
    }
})

//get para visualizar en el navegador la ruta search

app.get('/search', cookieParser, (req, res) => {
    console.log('GET SEARCH')
    console.log(req.params)
    console.log(req.param.name)
    console.log(req.query)
    console.log(req.body)
    console.log(req.headers)
    console.log(req.xhr)
    console.log(req.url)
    try {

        console.log(req.query)
        console.log(req.cookies)
        console.log(req.body)
        const { cookies: { id }, query: { q: query } } = req
        
        //cuando vayas a search, si no estás logeado, te devuelve a landing.
       
        if (!id) return res.redirect('/')

        const session = sessions[id]
        

        //si no tiene sessión, reenvía a landing
        if (!session) return res.redirect('/')

        //extrae el token de la session
        const { token } = session

        if (!token) return res.redirect('/')

        let name

        //va a la API a buscar el usuario con el id y el token. Nos devuelve sus datos. Name, surname, email, 
        retrieveUser(id, token)
            .then(user => { //los englobamos todos en user

                
                name = user.name //convertimos en global a name

                if (!query) return res.send(View({ body: Search({ path: '/search', name, logout: '/logout' }) }))

                session.query = query //añadimos otra prop a session (query)
               
                
                //con la info del user y la query busca patitos
                //pinta el search, con la query, el name, logout, ducks (mirar compo)
                return searchDucks(id, token, query) //para q era? q forzaba el return? que devuelva la promise?

                    //ahora result q llega es ducks
                    .then(ducks => {
                        res.setHeader('set-cookie', `path=/search`)
                        res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout',results: ducks, favPath: '/fav', detailPath: '/ducks' }) }))
                    })
                    
            })
            .catch(({ message }) => res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) })))
    } catch ({ message }) {
        res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) }))
    }
})

app.post('/logout', cookieParser, (req, res) => {
    console.log('POST LOGOUT')
    console.log(req.params)
    console.log(req.param.name)
    console.log(req.query)
    console.log(req.body)
    console.log(req.headers)
    console.log(req.xhr)
    console.log(req.url)
    //cuando clicamos logout le pone a la id del header, vacía. La caduca
    res.setHeader('set-cookie', 'id=""; expires=Thu, 01 Jan 1970 00:00:00 GMT')

    
    const { cookies: { id } } = req

    if (!id) return res.redirect('/')

    delete sessions[id]

    res.redirect('/')
})

app.post('/fav', cookieParser, bodyParser, (req, res) => {
    try {
        const { cookies: { id, path }, body: { id: duckId } } = req
        
        if (!id) return res.redirect('/')

        const session = sessions[id]

        if (!session) return res.redirect('/')

        const { token, query } = session

        if (!token) return res.redirect('/')

        toggleFavDuck(id, token, duckId)
            .then(() =>{path === '/search' ? res.redirect(`/search?q=${query}`) : res.redirect(`/ducks/${duckId}`)})
            .catch(({ message }) => {
                res.send('TODO error handling1')
            })
    } catch ({ message }) {
        res.send('TODO error handling2')
    }
})

app.get('/ducks/:duckId', cookieParser, bodyParser, (req, res) => {
    //cualquier cosa que esté dp de los : se accede mediante req.params
    try {
        console.log('GET DUCKS/DUCKID')
        console.log(req.params)
        console.log(req.param.name)
        console.log(req.query)
        console.log(req.body)
        console.log(req.headers)
        console.log(req.xhr)
        console.log(req.url)
        const { params: { duckId } } = req
        const { cookies: {id, path} } = req

        if(path) res.clearCookie('path') 

        if(!id) return res.redirect('/')

        const session = sessions[id]

        if(!session) return res.redirect('/')

        const { token } = session

        if (!token) return res.redirect('/')
        
        retrieveDuck(id, token, duckId)
            .then(duck => { 
                res.setHeader('set-cookie', `path=/ducks/${duckId}`)
                res.send(View({ body: Detail( { item: duck, favPath: '/fav', back: '/back' })}))
            })
            .catch(({ error }) => res.send(error))

    } catch ({ message }) {
        res.send('TODO error handling2222')
    }
    
   
})

app.post('/back', cookieParser, (req, res) => {
   
    const { cookies: { id } } = req
    
    if (!id) return res.redirect('/')

    const session = sessions[id]

    if (!session) return res.redirect('/')

    const { token, query } = session

    if (!token) return res.redirect('/')

    res.redirect(`/search?q=${query}`)
})

app.listen(port, () => console.log(`server running on port ${port}`))

