const { Component } = React

const { query } = location

const { id, token } = sessionStorage

let credentials;

class App extends Component {

    state = { view: 'landing', credentials, error: undefined, result: undefined}

    componentWillMount() {
       
        if (id && token) {
            try {
                retrieveUser(id, token, (error, user) => {
                    if (error) this.setState({ error: error.message })
                    else {
                        const { name } = user

                        this.setState({ user: name })
                    }
                })
            } catch (error) {
                this.setState({ error: error.message })
            }

            const { state: { query } } = this

            query && this.handleSearch(query)
        }
    }

    handleGoToRegistration = () => {
        this.setState({view: 'register'})
    }

    handleGoToLogin = () => {
        this.setState({view: 'login'})
    }

    handleRegister = (name, surname, email, password) => {
        //llamamos a la lógica
        try {
            registerUser(name, surname, email, password, (error, data) => {

                if(error) {
                    this.setState({error: error.message})
                }
                else {
                    this.setState({view: 'login'})
                }

            })
        } catch (error) {
            
            this.setState({error: error.message})
        }
    }

    handleLogin = (email, password) => {
        try {
            authenticateUser(email, password, (error, result) => {
                if (error) this.setState({ error: error.message })
                else
                    try {
                        const { id, token } = result

                        sessionStorage.id = id
                        sessionStorage.token = token

                        retrieveUser(id, token, (error, user) => {
                            if (error) this.setState({ error: error.message })
                            else {
                                const { name } = user

                                this.setState({ view: 'landing', user: name, result })
                            }
                        })
                    } catch (error) {
                        this.setState({ error: error.message })
                    }
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleLogout = () => {
    
    
            delete sessionStorage.id
            delete sessionStorage.token
    
            this.setState({ credentials: undefined })
        
        
    }

    handleFavCar = () => {
        console.log('ha entrado a FavCar')
    }

    handleProfile = () => {
        console.log('ha entrado a Profile')
    }

    handleSearch = (query) => {
        
        try {
            searchLaunches(query, (error, launches) => {
                if(error) {
                    
                    this.setState({error: error.message})
                }
                else {
                    this.setState({error: undefined, launches })
                   
                }
            })

        } catch (error) {
            this.setState({error: error.message})
        }
        //ToDo
    }


    handleDetail = (id) => {
        console.log('ha entrado en handleDetail')
        try {
            retrieveLaunch(id, (error, launch) => {
                if (error) this.setState({ error: error.message })
                else this.setState({ view: 'detail', launch})
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }


    handleBackToLanding = () => {
        this.setState({view: 'landing'})
    }

    handleLogOut = () =>{
        console.log('ha entrado en handleLogOut')
    }

    render() {
        //declaramos las variables y asignamos a scope de App

        const {state: {view, error, result, query, launches, launch, user}, handleGoToRegistration, handleGoToLogin, handleRegister, handleLogin, handleLogout, handleFavCar, handleProfile, handleSearch, handleDetail, handleBackToLanding, handleLogOut} = this
    
        return <>
            
            {view === 'landing' && <Header onRegister={handleGoToRegistration} onLogin = {handleGoToLogin} result = {result} onLogout = {handleLogout} onFavCar = {handleFavCar} onProfile = {handleProfile} user = {user} />}

            
            {view === 'landing' && <Search onSearch = {handleSearch} query = {query} output = {launches} onOutputRender = {output => <Output rows = {output} onRowsRender = {row => <OutputRow  row = {row} key = {row.mission_name} onClick = {handleDetail} /> }/>} user = {user} onLogOut = {handleLogOut} />}        

            {view === 'landing' && <Footer />}
            
            {view === 'register' && <Register onRegister={handleRegister} error = {error} onBack = {handleBackToLanding} />}
            
            {view === 'login' && <Login onLogin = {handleLogin} error = {error} onBack = {handleBackToLanding}/>}

            {view === 'detail' && <DetailLaunch launch={launch} onBack={handleBackToLanding} />}
        </>
    }

}