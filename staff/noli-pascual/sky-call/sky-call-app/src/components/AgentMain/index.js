import React from 'react'
import Feedback from '../Feedback'
import AgentSearch from '../AgentSearch'
import AgentClientResults from '../AgentClientResults'


export default function ({ clients, user, onSubmitStatus, onSubmitRoute, visits, calls}) {

    return <section className='agent main'>
        <h1 className="main__title">AGENT AREA</h1>
        
        <h2 className = 'main__user'>{user}</h2>

        <AgentSearch clients = {clients} visits = {visits} calls ={calls} onSubmitStatus = {onSubmitStatus} onSubmitRoute = {onSubmitRoute} />
        

        
        {error && <Feedback message={error} />}

    </section>
}