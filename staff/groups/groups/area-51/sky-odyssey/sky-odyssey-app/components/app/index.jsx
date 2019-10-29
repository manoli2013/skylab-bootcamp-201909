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
        console.log('register')
    }

    handleLogin = (email, password) => {
        console.log('login')
        //todo
    }

    render() {
        //declaramos las variables y asignamos a scope de App

        const {state: {view}, handleGoToRegistration, handleGoToLogin, handleRegister, handleLogin} = this
    
        return <>
            
            {view === 'landing' && <Header onRegister={handleGoToRegistration} onLogin = {handleGoToLogin} />}
            {view === 'register' && <Register onRegister={handleRegister} />}
            
            {view === 'login' && <Login onLogin = {handleLogin} />}


        
        </>
    }

}