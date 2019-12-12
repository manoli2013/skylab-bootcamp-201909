import React, { useState, useEffect }from 'react'
import './index.sass'
import { retrieveUser } from '../../logic'
import { Router, withRouter } from 'react-router-dom'
import AgentSearch from '../AgentSearch'
import AgentClientResults from '../AgentClientResults'
import Feedback from '../Feedback'
import jwt from '../../utils/jwt'


function AgentMain({ history }) {
    let error

    const { token } = sessionStorage
    const [user, setUser] = useState()
    const [name, setName] = useState()


    useEffect(() => {
        
        (async () => {
            if (token) {
                const { sub: id } = jwt.extractPayload(token)
                const user = await retrieveUser(token, id)
                setUser(user)
                const {name} = user
                setName(name)

            }
        })()
    }, [sessionStorage.token])

    //handles AGENT

    return<> 

        <AgentSearch />

    
        {/* <Router path='/564564' render={() => <section className="agent-main">

            <AgentSearch />

            <AgentClientResults />

            {error && <Feedback message={error} />}

        </section> } /> */}
    </>
}

export default withRouter(AgentMain)