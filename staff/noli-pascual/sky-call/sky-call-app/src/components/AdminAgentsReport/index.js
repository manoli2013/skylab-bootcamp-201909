import React, { useState, useEffect } from 'react'
import AdminAgentItem from '../AdminAgentItem'
import { agentsReport } from '../../logic'

export default function () {
    
    const [agentsList, setAgentsList] = useState([])


    useEffect(() => {
        const { token } = sessionStorage;

        (async () => {
            if (token) {
                const agentsList = await agentsReport(token)

                setAgentsList(agentsList)
            }
        })()
    }, [])


    return <section className='agents'>

        <section className='agents__list-container'>

            <h2 className='agents__title'>List of Agents</h2>

            <ul className='agents__results results'>

                {agentsList.map((agent) => {
                    return <li className='agents__row' key={agent.id}> <AdminAgentItem agent={agent} /></li>

                })}

            </ul>

        </section>

    </section>
}
