import React, { useState, useEffect } from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'

import './index.sass'

//Compos
import Landing from '../Landing'
import Register from '../Register'
import Login from '../Login'
import Header from '../Header'
import Footer from '../Footer'
import Home from '../Home'


import { registerUser, authenticateUser, retrieveUser } from '../../logic'

export default withRouter (function ({ history }) {

    useEffect(() => {

        const { token } = sessionStorage

        if (token) {
            history.push('/home')
        }

  
    }, [])

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
            
            const userActive = await retrieveUser(token)
            
            history.push('/home')

        } catch (error) {
            console.error(error)
        }
    }

    async function handleGoBack() {
        history.goBack()
    }
    
    const { token } = sessionStorage

    return <>

        <Header />

        <Route exact path="/" render={() => token ? <Redirect to='/home' /> : <Landing onRegister={handleGoToRegister} onLogin={handleGoToLogin} />} />

        <Route path="/register" render={() => token ? <Redirect to='/home' /> : <Register onRegister={handleRegister} onBack={handleGoBack} />} />

        <Route path="/login" render={() => token ? <Redirect to='/home' /> : <Login onLogin={handleLogin} onBack={handleGoBack} on error />} />

        <Route path = "/home" render={() => <Home />} /> 

       <Footer />
    </>



})