import React from 'react'
import AgentClientItem from '../AgentClientItem'



export default function ({ clients, visits, calls }) {

    return <section className='clients'>

        <section className='clients__list-container'>

            <h2 className='clients__title'>Clients</h2>

            <ul className='clients__results results'>
                
                {clients.map((client => <AgentClientItem client = {client} calls = {client.calls} visits = {client.visits} /> ))}

            </ul>

        </section>

    </section>
}