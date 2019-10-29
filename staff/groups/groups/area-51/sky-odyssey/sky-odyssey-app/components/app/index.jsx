const { Component } = React

class App extends Component {

    state = { view: 'landing', error: undefined}

    handleGoToRegistration = () => {
        this.setState({view: 'register'})
    }

    handleGoToLogin = () => {
        this.setState({view: 'login'})
    }

    handleRegister = () => {
        alert('ha entrado en handle register') //todo
    }

    handleLogin = () => {
        alert('ha entrado en handle')//todo
    }

    render() {
        //declaramos las variables y asignamos a scope de App

        const {state: {view, error}, handleGoToRegistration, handleGoToLogin, handleRegister, handleLogin} = this
    
        return <>
            
            {view === 'landing' && <Header onRegister={handleGoToRegistration} onLogin = {handleGoToLogin} />}
            {view === 'register' && <Register onSubmit={handleRegister} />}
                {view === 'login' && <Login onSubmit ={handleLogin} />}

        
        </>
    }

}