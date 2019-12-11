import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './index.sass'
import { generalReport } from '../../logic'

export default withRouter (function ({ history }) {
    let error
    const [calls, setCalls] = useState()
    const [answered, setAnswered] = useState()
    const [pending, setPending] = useState()
    const [visits, setVisits] = useState()
    const [fails, setFails] = useState()
    const [calling, setCalling] = useState()

    useEffect(() => {

        (async () => {
            const { token } = sessionStorage
            if (token) {

                const { calls, answered, pending, visits, fails, calling } = await generalReport(token)

                setCalls(calls)
                setAnswered(answered)
                setPending(pending)
                setVisits(visits)
                setFails(fails)
                setCalling(calling)
            }
        })()
    }, [sessionStorage.token])

    async function onBack(event) {
        event.preventDefault()
        history.goBack()
    }

    //general report

    return <section className='report'>


        <h2 className='report__title'>General Data</h2>

        <section className='report__results'>

            <section className='call-item__field field'>

                <h4 className="field__title">TOTAL CALLS</h4>
                <p className="field__subtitle">{calls}</p>

            </section>

            <section className='call-item__field field'>

                <h4 className="field__title">ANSWERED</h4>
                <p className="field__subtitle">{answered}</p>

            </section>

            <section className='call-item__field field '>

                <h4 className="field__title">PENDING</h4>
                <p className="field__subtitle">{pending}</p>

            </section>

            <section className='call-item__field field'>
                <h4 className="field__title">VISITS</h4>
                <p className="field__subtitle">{visits}</p>

            </section>

            <section className='call-item__field field'>

                <h4 className="field__title">FAILS</h4>
                <p className="field__subtitle">{fails}</p>

            </section>
            <section className='call-item__field field'>

                <h4 className="field__title">AGENTS CALLING</h4>
                <p className="field__subtitle">{calling}</p>

            </section>

        </section>

        <a className="report__back" href="#" onClick={onBack}>Go Back</a>

    </section>

})

