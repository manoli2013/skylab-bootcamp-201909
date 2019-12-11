import React, { useEffect, useState } from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'

import AdminMain from '../AdminMain'
import AgentMain from '../AgentMain'

import AdminCreateClient from '../AdminCreateClient'
import AdminGeneralReport from '../AdminGeneralReport'
import AdminAgentsReport from '../AdminAgentsReport'
import AdminCallsReport from '../AdminCallsReport'

import { retrieveUser } from '../../logic'

export default withRouter(function ({ history }) {

    const [ user, setUser ] = useState()

    useEffect(() => {

        (async () => {
            const { token } = sessionStorage

            if (!user && token) {
                const user = await retrieveUser(token)
                setUser(user)
            } else {
                history.push('/')
            }

        })()
    }, [])


    return <>
        {user && user.role === 'agent' && < Redirect to='/home/agent' />}
        {user && user.role === 'admin' && < Redirect to='/home/admin' />}

        {user && <Route path="/home/agent" render={() => user.role === 'agent' ? <AgentMain /> : < Redirect to='/home/admin' /> } />}
        {user && <Route path="/home/admin" render={() => user.role === 'admin' ? <AdminMain /> : < Redirect to='/home/agent' /> } />}

        <Route path="/home/agents-report" render={() => <AdminAgentsReport />} />
        <Route path="/home/calls-report" render={() => <AdminCallsReport />} />
        <Route path="/home/create-client" render={() => <AdminCreateClient />} />
        <Route path="/home/general-report" render={() => <AdminGeneralReport />} />

    </>

})