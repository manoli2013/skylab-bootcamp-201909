import React from 'react'
import AdminCallItem from '../AdminCallItem'

export default function ({ calls }) {

    return <section className='calls'>

        <section className='calls__list-container'>

            <h2 className='calls__title'>List of Agents</h2>

            <ul className='calls__results results'>

                {calls.map((call) => {
                    <li className='calls__row' key={call.id}> <AdminCallItem call={call} /></li>

                })}

            </ul>

        </section>

    </section>
}