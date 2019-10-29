const { Component } = React

class App extends Component {

    state = { view: 'landing', error: undefined}

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
            authenticateUser(email,password, (error, result) => {
                if(error) {
                    this.setState({error: error.message})
                }
                else {
                    
                    this.setState({view: 'landing', result})
                }
            }) 
        }
        catch (error) {
            this.setState({error: error.message})
        }   
    }

    render() {
        //declaramos las variables y asignamos a scope de App

        const {state: {view, error}, handleGoToRegistration, handleGoToLogin, handleRegister, handleLogin} = this
    
        return <>
            
            {view === 'landing' && <Header onRegister={handleGoToRegistration} onLogin = {handleGoToLogin} />}
            {view === 'register' && <Register onRegister={handleRegister} error = {error}/>}
            
            {view === 'login' && <Login onLogin = {handleLogin} />}


        
        </>
    }

}