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
import Feedback from '../Feedback'
import jwt from '../../utils/jwt'


import { registerUser, authenticateUser, retrieveUser } from '../../logic'

export default withRouter (function ({ history }) {

    const [error, setError] = useState('')

    useEffect(() => {

        const { token } = sessionStorage

        if (token) {
            history.push('/home')
        }

  
    }, [])

    function handleGoToRegister() { 
        setError('')
        history.push('/register')
    }


    function handleGoToLogin() { 
        setError('')
        history.push('/login') }

    async function handleRegister(name, surname, username, password) {

        try {
            await registerUser(name, surname, username, password)

            history.push('/login')
        } catch (error) {
          
            setError(error.message)
        }
    }

    async function handleLogin(username, password) {

        try {
            const token = await authenticateUser(username, password)
    
            sessionStorage.token = token

            const { sub: id } = jwt.extractPayload(token)
            
            const userActive = await retrieveUser(token, id)

            setError('')
            
            history.push('/home')

        } catch (error) {
        
         
            setError(error.message)
            
        }
    }

    async function handleGoBack() {
        setError('')
        history.goBack()
    }
    
    const { token } = sessionStorage

    return <>

        <Header />

        <Route exact path="/" render={() => token ? <Redirect to='/home' /> : <Landing onRegister={handleGoToRegister} onLogin={handleGoToLogin} />} />

        <Route path="/register" render={() => token ? <Redirect to='/home' /> : <Register onRegister={handleRegister} onBack={handleGoBack} />} />

        <Route path="/login" render={() => token ? <Redirect to='/home' /> : <Login onLogin={handleLogin} onBack={handleGoBack} on error />} />

        <Route path = "/home" render={() => <Home />} /> 

        {error && <Feedback message = {error} />} 

       <Footer />
    </>



})