import React, { useState, useEffect } from 'react'
import './index.sass'
import {generalReport} from '../../logic'

export default function ({  }) {
    let error
    const [calls, setCalls] = useState()
    const [answered, setAnswered] = useState()
    const [pending, setPending] = useState()
    const [visits, setVisits] = useState()
    const [fails, setFails] = useState()
    const [calling, setCalling] = useState()

    useEffect(() => {
        
        (async () => {
            const {token} = sessionStorage
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
    
    
//general report

    return <section className='report'>

        <section className='report__container'>

            <h2 className='report__title'>General Data</h2>

            <section className='report__results'>
                    
                    <div className='report-row'>calls {calls}</div>
                    <div className='report-row'>answered {answered}</div>
                    <div className='report-row'>pending {pending}</div>
                    <div className='report-row'>visits {visits}</div>
                    <div className='report-row'>fails {fails}</div>
                    <div className='report-row'>calling {calling}</div>

            </section>

        </section>


    </section>
}

