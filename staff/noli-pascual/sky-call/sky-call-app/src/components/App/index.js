import React, { useState, useEffect } from 'react';

import './index.sass'

//Compos
import Landing from '../Landing'
import Register from '../Register'
import Login from '../Login'


import { Route, withRouter, Redirect } from 'react-router-dom'
import { registerUser, authenticateUser} from '../../logic'

export default withRouter(function ({ history }) {
    
    // const [user, setUser] = useState()

    // useEffect(() => {
    //     const { token } = sessionStorage;

    //     (async () => {
    //         if (token) {
    //             const { name } = await retrieveUser(token)

    //             setName(name)

    //             await retrieveTasks(token)
    //         }
    //     })()
    // }, [sessionStorage.token])


    function handleGoToRegister() { history.push('/register') }

    function handleGoToLogin() { history.push('/login') }

    async function handleRegister(name, surname, username, password) {
        try {
            await registerUser(name, surname, username, password)

            history.push('/login')
        } catch (error) {
            console.error(error)
        }
    }
    
    async function handleLogin(username, password) {
        try {
            const token = await authenticateUser(username, password)

            sessionStorage.token = token

            history.push('/board')
        } catch (error) {
            console.error(error)
        }
    }

    //va a la raiz

    function handleGoBack() { history.push('/') }

    //log out limpia la sesión y te devuelve a la raiz
    function handleLogout() {
        sessionStorage.clear()

        handleGoBack()
    }


    // const { token } = sessionStorage

    return <>
        <Route exact path="/" render={() => <Landing onRegister={handleGoToRegister} onLogin = {handleGoToLogin} />} />

        <Route path="/register" render={() => <Register onRegister={handleRegister} onBack={handleGoBack} />} />
   

        <Route path="/login" render={() => <Login onLogin={handleLogin} onBack={handleGoBack} />} />



        {/* token ? <Redirect to="/board" />  */}
    </>
})