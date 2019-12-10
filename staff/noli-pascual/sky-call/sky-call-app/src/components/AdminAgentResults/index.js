import React from 'react'
import AdminAgentItem from '../AdminAgentItem'

export default function ({ agents }) {

    return <section className='agents'>

        <section className='agents__list-container'>

            <h2 className='agents__title'>List of Agents</h2>

            <ul className='agents__results results'>
                
                {agents.map(agent => {

                    <li className='agents__row' key={agent.id}> <AdminAgentItem agent = {agent} /></li>

                })}

            </ul>

        </section>

    </section>
}