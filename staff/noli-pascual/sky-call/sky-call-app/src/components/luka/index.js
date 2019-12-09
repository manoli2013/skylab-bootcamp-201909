import React, { useState, useEffect } from 'react'
import './index.sass'
import { retrieveUser} from '../../logic'
import { withRouter } from 'react-router-dom'
import AgentSearch from '../AgentSearch'
import AgentClientResults from '../AgentClientResults'
import Feedback from '../Feedback'


function AgentMain({ history }) {
    let error

    const { token } = sessionStorage
    const [user, setUser] = useState()
    const [clients, SetClients] = useState([])

    useEffect(() => {
        debugger
        (async () => {
            if (token) {
                const user = await retrieveUser(token)
                setUser(user)

            }
        })()
    }, [])

    //handles AGENT

   
    function handleLogout() {
        sessionStorage.clear()
        handleGoBack()
    }
    function handleGoBack() {
        history.push('/')
    }
    return <section className = "agent-main">

        <h1>Hola main</h1>

        <AgentSearch clients={clients} onSubmitRoute={handleSubmitRoute} />
        <AgentClientResults clients={clients} />

        <a className="agent-main__back" href="" onClick={event => {
            event.preventDefault()

            onBack()
        }}>Go back</a>

        {error && <Feedback message={error} />}
    </section>
}
{/* <button className="buton__directions"><a className="login__toRegister" href="" onClick={event => {
    event.preventDefault()
    onBack()
}}>Filter preferences</a></button>
    <a className="login__toRegister" href="" onClick={event => {
        event.preventDefault()
        onBack()
    }}>Go back</a> */}
export default withRouter(MyProfile)