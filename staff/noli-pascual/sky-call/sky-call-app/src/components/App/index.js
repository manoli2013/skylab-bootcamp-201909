import React, { useState, useEffect } from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'

import './index.sass'

//Compos
import Landing from '../Landing'
import Register from '../Register'
import Login from '../Login'
import Header from '../Header'
import Footer from '../Footer'

import AdminMain from '../AdminMain'
import AgentMain from '../AgentMain'

//admin
import AdminReportFigures from '../AdminReportFigures'
import AdminAgentsResults from '../AdminAgentResults'
import AdminCallsResults from '../AdminCallsResults'
import AdminAddClient from '../AdminAddClient'
import AdminAddRoute from '../AdminAddRoute'
import AdminUpdateAgent from '../AdminUpdateAgent'

//agent


import { registerUser, authenticateUser, retrieveUser, retrieveCalls, retrieveVisits, listCallsAdmin } from '../../logic'

import { retrieveClients, listClientsRoute, listClientsStatus, listCallsClient, listVisitsClient } from '../../logic'


export default withRouter(function ({ history }) {

    const [user, setUser] = useState()

    //agent
    const [clients, setClients] = useState([])
    const [client, setClient] = useState([])
    const [route, setRoute] = useState()
    
    //admin
    const [users, setUsers] = useState([])
    const [adminReport, setAdminReport] = useState({})
    const [listAgents, setListAgents] = useState([])
    const [callsReport, setCallsReport] = useState([])
    const [calls, setCalls] = useState([])
    const [visits, setVisits] = useState([])

    useEffect(() => {
        const { token } = sessionStorage;

        (async () => {
            if (token) {

               
                //ADMIN
                // await retrieveUsers(token)
                // setUsers(users)
                // await retrieveCalls(token)
                // setCalls(calls)
                // await retrieveVisits(token)
                // setVisits(visits)


                // await retrieveCallsReport(token)
                // await retrieveAdminReport(token)
                // await retrieveAgentsReport(token)

               
            }
        })()
    }, [sessionStorage.token, user, calls, visits, users, clients, client, callsReport, adminReport, listAgents])



    //ADMIN

    async function retrieveUsers(token) {
        const users = retrieveUsers(token)

        setUsers(users)
    }
    //calls report
    async function retrieveCallsReport(token) {
        const callsReport = listCallsAdmin(token)

        setCallsReport(callsReport)
    }
    //agents report
    async function retrieveAgentsReport(token) {
        const listAgents = listAgents(token)

        setListAgents(listAgents)
    }

    //general report
    async function retrieveAdminReport(token) {
        const adminReport = adminReport(token)

        setAdminReport(adminReport)
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

    async function handleLogin(username, password) {debugger
        
        try {
            const token = await authenticateUser(username, password)

            sessionStorage.token = token
            
            const user = await retrieveUser(token)

            setUser(user)

            user.role === 'agent' ? history.push('/agent') : history.push('/admin')

        } catch (error) {
            console.error(error)
        }
    }




    //ir atrás
    function handleGoBack() { history.push('/') }

    //log out limpia la sesión y te devuelve a la raiz

    function handleLogout() {
        sessionStorage.clear()

        handleGoBack()
    }


    //HANDLES ADMIN


    //Admin Crear clente, añadir ruta, modificar agente

    function handleGoToCreateClient() { history.push('/admin/create-client') }
    function handleGoToAddRoute() { history.push('/admin/add-route') }
    function handleGoToUpdateAgent() { history.push('/admin//update-agent') }

    async function handleCreateClient(idAdmin, nameClient, surnameClient, tel, location, address) {
        alert('llamar a la lógica de create Client')
    }
    async function handleAddRoute(idAdmin, location, statusRoute) {
        alert('llamar a la lógica de add route')
    }
    async function handleUpdateAgent(id, idUser, name, surname, password) {
        alert('llamar a la lógica de Update Client')
    }

    //Admin informes

    function handleGoToGeneralReport() { history.push('/admin/general-report') }
    function handleGoToAgentsResults() { history.push('/admin/agents-report') }
    function handleGoToCallsResults() { history.push('/admin/calls-report') }


    
    
    const { token } = sessionStorage



    return <>


        <Header />

        <Route exact path="/" render={() => <Landing onRegister={handleGoToRegister} onLogin={handleGoToLogin} /> } />

        <Route path="/register" render={() => <Register onRegister={handleRegister} onBack={handleGoBack} />} />
        <Route path="/login" render={() => <Login onLogin={handleLogin} onBack={handleGoBack} on error />} />

        <Route path="/admin" render={() => <AdminMain onBack={handleGoBack} onCreateClient={handleGoToCreateClient} onAddRoute={handleGoToAddRoute} onUpdateAgent={handleGoToUpdateAgent} onGeneralReport={handleGoToGeneralReport} onAgentsReport={handleGoToAgentsResults} onCallsReport={handleGoToCallsResults} />} />

        <Route path="/hola" render={() => <AdminReportFigures />} />

        <Route path="/general" render={() => <AdminReportFigures adminReport={adminReport} />} />

        <Route path="/admin-agents-report" render={() => <AdminAgentsResults listAgents={listAgents} />} />
        <Route path="/admin-calls-report" render={() => <AdminCallsResults callsReport={callsReport} />} />



        <Route exact path="/admin-create-client" render={() => <AdminAddClient onCreateClient={handleCreateClient} />} />

        <Route path="/admin-add-route" render={() => <AdminAddRoute onAddRoute={handleAddRoute} />} />

        <Route path="/admin-update-agent" render={() => <AdminUpdateAgent onUpdateAgent={handleUpdateAgent} />} />

        <Route path="/agent" render={() => <AgentMain clients = {clients} onBack = {handleGoBack} onSubmitRoute = {handleSubmitRoute}/>} />

        <Footer />
    </>



})