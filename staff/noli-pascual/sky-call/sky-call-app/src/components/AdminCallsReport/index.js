import React, { useState, useEffect } from 'react'
import AdminCallItem from '../AdminCallItem'
import { callsReport } from '../../logic'

export default function () {


    const [calls, setCalls] = useState([])


    useEffect(() => {

        (async () => {
            const { token } = sessionStorage
            if (token) {

                const callsResult = await callsReport(token)

                setCalls(callsResult)

            }
        })()
    }, [])


    return <section className='calls'>

        <section className='calls__list-container'>

            <h2 className='calls__title'>List of Calls</h2>

            <ul className='calls__results results'>

                {calls.map((call) => {

                    return <li className='calls__row' key={call.id}> <AdminCallItem call={call} /></li>

                })}

            </ul>

        </section>

    </section>
}