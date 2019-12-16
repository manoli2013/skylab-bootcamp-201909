import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import AdminCallItem from '../AdminCallItem'
import { callsReport } from '../../logic'

export default withRouter( function ({history}) {


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

    async function onBack(event) {
        event.preventDefault()
        history.goBack()
    }


    return <section className='calls'>

       

            <h2 className='calls__title'>List of Calls</h2>
            <a className="report__back" href="#" onClick={onBack}>Go Back</a>

            <ul className='calls__results results'>

                {calls.map((call) => {

                    return <li className='calls__row' key={call.id}> <AdminCallItem call={call} /></li>

                })}

            </ul>


    </section>
})