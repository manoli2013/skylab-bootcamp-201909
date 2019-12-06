import React, { useState, useEffect } from 'react';

import './index.sass'

//Compos
import Landing from '../Landing'
import Header from '../Header'
import Register from '../Register'
import Login from '../Login'
import Footer from '../Footer'
import AdminMain from '../AdminMain'
import AdminAddClient from '../AdminAddClient'
import AdminAddRoute from '../AdminAddRoute'
import AdminUpdateAgent from '../AdminUpdateAgent'
import AdminReportFigures from '../AdminReportFigures'
import AdminAgentsResults from '../AdminAgentsResultsANTIGUO'
import AdminCallsResults from '../AdminAgentsResultsANTIGUO'
import Feedback from '../Feedback'


import { Route, withRouter, Redirect } from 'react-router-dom'
import { registerUser, authenticateUser } from '../../logic'
import AgentClientResults from '../AgentClientResults';
import AgentDetailClient from '../AgentDetailClient';
import AgentClientItem from '../AgentClientItem';

export default withRouter(function ({ history }) {

    const [user, setUser] = useState()
    const [role, setRole] = useState()
    const [agentsReport, setAgentsReport] = useState({})
    const [agents, setAgents] = useState([])
    const [visits, setVisits] = useState([])
    const [calls, setCalls] = useState([])

    useEffect(() => {
        const { token } = sessionStorage;

        (async () => {
            if (token) {
                const { name, role } = await retrieveUser(token)

                setUser(name)
                setRole(role)

                await retrieveAgents(token)
                await retrieveGeneralReport(token)
                await retrieveCalls(token)

            }
        })()
    }, [sessionStorage.token, agentsReport, agents, calls])

    async function retrieveAgents(token) {
        const agents = listAgents(token)

        setAgents(agents)
    }
    async function retrieveGeneralReport(token) {
        const agentsReport = listGeneralReport(token)

        setAgentsReport(agentsReport)
    }
    async function retrieveCalls(token) {
        const calls = listCalls(token)

        setCalls(calls)
    }
    async function retrieveVisits(token) {
        const visits = listVisits(token)

        setVisits(visits)
    }


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

    //ADMIN MAIN

    function handleGoToCreateClient() { history.push('/admin/create-client') }
    function handleGoToAddRoute() { history.push('/admin/add-route') }
    function handleGoToUpdateAgent() { history.push('/admin//update-agent') }
    function handleGoToGeneralReport() { history.push('/admin/general-report') }
    function handleGoToAgentsResults() { history.push('/admin/agents-results') }
    function handleGoToCallsResults() { history.push('/admin/calls-results') }


    async function handleCreateClient(idAdmin, nameClient, surnameClient, tel, location, address) {
        alert('llamar a la lógica de create Client')
    }
    async function handleAddRoute(idAdmin, location, statusRoute) {
        alert('llamar a la lógica de add route')
    }
    async function handleUpdateAgent(id, idUser, name, surname, password) {
        alert('llamar a la lógica de Update Client')
    }


    function handleGoBack() { history.push('/') }

    //log out limpia la sesión y te devuelve a la raiz
    function handleLogout() {
        sessionStorage.clear()

        handleGoBack()
    }

    // const { token } = sessionStorage

    return <div className="app">

        <Header />


        <Route exact path="/" render={() => <Landing onRegister={handleGoToRegister} onLogin={handleGoToLogin} />} />
        <Route path="/register" render={() => token? agent? <Redirect to = '/agent' />  <Register onRegister={handleRegister} onBack={handleGoBack} />} />
        <Route path="/login" render={() => <Login onLogin={handleLogin} onBack={handleGoBack} on error />} />


        <Route path="/agent" render={() => token ? <> <AgentMain user={name} onLogout={handleLogout} clients ={clients} visits = {visits} calls = {calls}
        
            
        <AgentClientItem onDetail = {handleDetail} />
        <AgentDetailClient />
        </> 
        
        
       

        <Route path="/admin" render={() => <AdminMain onBack={handleGoBack} onCreateClient={handleGoToCreateClient} onAddRoute={handleGoToAddRoute} onUpdateAgent={handleGoToUpdateAgent} onGeneralReport={handleGoToGeneralReport} onAgentsReport={handleGoToAgentsResults} onCallsReport={handleGoToCallsResults} />} />

        <Route path="/admin/general-report" render={() => <AdminReportFigures agentsReport={agentsReport} /> } />

        <Route path="/admin/agents-results" render={() => <AdminAgentsResults agents = {agents} /> } />
        <Route path="/admin/calls-results" render={() => <AdminCallsResults calls={calls} /> } />


        <Route path="/admin/create-client" render={() => <AdminAddClient onCreateClient={handleCreateClient} />} />

        <Route path="/admin/add-route" render={() => <AdminAddRoute onAddRoute={handleAddRoute} />} />

        <Route path="/admin/update-agent" render={() => <AdminUpdateAgent onUpdateAgent={handleUpdateAgent} />} />

        <Footer />

    </div>

})