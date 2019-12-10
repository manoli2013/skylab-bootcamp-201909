import React, { useState, useEffect } from 'react'
import { Route, withRouter } from 'react-router-dom'

import './index.sass'

//Compos
import Landing from '../Landing'
import Register from '../Register'
import Login from '../Login'
import Header from '../Header'
import Footer from '../Footer'

import AdminMain from '../AdminMain'
import AgentMain from '../AgentMain'

import AdminCreateClient from '../AdminCreateClient'
import AdminGeneralReport from '../AdminGeneralReport'
import AdminAgentsReport from '../AdminAgentsReport'
import AdminCallsReport from '../AdminCallsReport'





import { registerUser, authenticateUser, retrieveUser} from '../../logic'

export default withRouter (function ({ history }) {


    const [user, setUser] = useState()

    useEffect(() => {
        
        (async () => {
            if (token) {
                const user = await retrieveUser(token)
                setUser(user)

            }
        })()
    }, [])

    function handleLogout() {
        sessionStorage.clear()
        handleGoBack()
    }
    function handleGoBack(event) {
        event.preventDefault()
        history.push('/')
    }


    //HANDLES GENERAL


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
            
            const user = await retrieveUser(token)
            
            setUser(user)
            sessionStorage.role = user.role

            const {role} = sessionStorage

            role === 'agent' ? history.push('/agent') : history.push('/admin')

        } catch (error) {
            console.error(error)
        }
    }
            const {role, token} = sessionStorage

    return <>

        

        <Header />

        <Route exact path="/" render={() => <Landing onRegister={handleGoToRegister} onLogin={handleGoToLogin} />} />

        <Route path="/register" render={() => <Register onRegister={handleRegister} onBack={handleGoBack} />} />
        <Route path="/login" render={() => <Login onLogin={handleLogin} onBack={handleGoBack} on error />} />


        <Route path="/agent" render={() =>token && role === 'agent' ? <AgentMain /> : <Login />} />


        <Route path="/admin" render={() => <AdminMain />} />

        <Route path="/agents-report" render={() => <AdminAgentsReport />} />

        <Route path="/calls-report" render={() => <AdminCallsReport />} />

        <Route exact path="/create-client" render={() => <AdminCreateClient />} />

        <Route path="/general-report" render={() => <AdminGeneralReport />} />


        <Footer />
    </>



})