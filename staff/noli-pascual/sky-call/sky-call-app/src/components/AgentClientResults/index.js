import React from 'react'
import AgentClientItem from '../AgentClientItem'



export default function ({ clients }) {

    return <section className='clients'>

        <section className='clients__list-container'>

            <h2 className='clients__title'>Clients</h2>

            <ul className='clients__results results'>
                
                {clients &&  clients.map((client => <AgentClientItem key = {client.id} client={client}  /> ))}

            </ul>

        </section>

    </section>
}