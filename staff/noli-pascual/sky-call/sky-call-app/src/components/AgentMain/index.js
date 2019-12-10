import React, { useState, useEffect }from 'react'
import './index.sass'
import { retrieveUser } from '../../logic'
import { withRouter } from 'react-router-dom'
import AgentSearch from '../AgentSearch'
import AgentClientResults from '../AgentClientResults'
import Feedback from '../Feedback'


function AgentMain({ history }) {
    let error

    const { token } = sessionStorage
    const [user, setUser] = useState()
    const [name, setName] = useState()


    useEffect(() => {
        
        (async () => {
            if (token) {
                const user = await retrieveUser(token)
                setUser(user)
                const {name} = user
                setName(name)

            }
        })()
    }, [sessionStorage.token])

    //handles AGENT


    function handleLogout() {
        sessionStorage.clear()
        handleGoBack()
    }
    function handleGoBack(event) {
        event.preventDefault()
        history.push('/')
    }
    return <section className="agent-main">

        <h1>Welcome to AGENT ${name} </h1>

        <AgentSearch />

        <AgentClientResults />

        <nav className="agent-main__menu menu">

            <li className="menu__item">Welcome, {name}</li>
            <li className="menu__item" onClick={handleGoBack}>GO BACK</li>
            <li className="menu__item" onClick={handleLogout}>Logout</li>

        </nav>

        {error && <Feedback message={error} />}

    </section>
}

export default withRouter(AgentMain)