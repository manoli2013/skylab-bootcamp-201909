import React, { useState, useEffect } from 'react'
import AgentCreateVisit from '../AgentCreateVisit'
import { withRouter } from 'react-router-dom'

import { retrieveClient, createCall, stopCall, updateClient } from '../../logic'

import ClientHistory from '../ClientHistory'


export default withRouter(function ({ history, client, setClient }) {

    const [error, setError] = useState()
    const [callsClient, setCallsClient] = useState([])
    const [visitsClient, setVisitsClient] = useState([])
    const [call, setCall] = useState(undefined)
    const [control, setControl] = useState(false)

    useEffect(() => {
        const { token } = sessionStorage;

            (async () => {
                if (token) {
                    
                    const _client = await retrieveClient(token, client.id)
                    
                    setClient(_client)
                    

                    const { callsClient, visitsClient } = _client

                    setCallsClient(callsClient)
                    setVisitsClient(visitsClient)
                }
            })()
    }, [control])

    async function onCall(event) {
        event.preventDefault()

        const { token } = sessionStorage
        try {

            const callCreated = await createCall(token, client.id)
            setCall(callCreated)
            setControl(!control)


        } catch (error) {
            setError(error.message)
        }
    }

    async function onUpdate(name, surname, telephone) {

        const {token} = sessionStorage
        if(name === '') name = undefined
        if(surname === '') surname = undefined
        if(telephone === '') telephone = undefined


        try {

            await updateClient(token, client.id, name, surname, telephone)
            setControl(!control)
        } catch (error) {

            setError(error.message)
        }
    }
    
    async function onStop(statusCall) {

        const {token} = sessionStorage
        
        try {

            await stopCall (token, client.id, call, statusCall)
            setControl(!control)

        } catch (error) {
            setError(error.message)
        }
    }


    return <section className="client-detail detail">

       {client && <form className="detail__form" onSubmit={function (event) {
            event.preventDefault()
            event.stopPropagation()

            const { nameClient: { value: name }, surnameClient: { value: surname }, tel: { value: telephone }} = event.target

            onUpdate(name, surname, telephone)
        }}>
            <h2 className = "client-detail__title">Update Client</h2>

            <input className="client-detail__input" name="nameClient" placeholder={client.nameClient}></input>
            <input className="client-detail__input" name="surnameClient" placeholder={client.surnameClient}></input>
            <input className="client-detail__input" name='tel' placeholder={client.tel}></input>
            

            <button className="client-detail__submit">Update</button>

        </form>}

        <section className="client-detail__info">
            <h3 className = "client-detail__subtitles">Recent Calls</h3>
            <ul className="client-detail__calls">
                {callsClient && callsClient.length > 0 ? callsClient.map(call => <ClientHistory formatDate={'YYYY/MM/DD HH:mm'} id={call.agent}  date={call.created} status={call.statusCall} />) :  <p className = "detail__prop">No calls</p>}
            </ul>
            
            <h3 className = "client-detail__subtitles">Recent Visits</h3>
            <ul className="client-detail__visits">
                {visitsClient && visitsClient.length > 0 ? visitsClient.map(visit => <ClientHistory formatDate={'YYYY/MM/DD'} id={visit.agent} date={visit.dateVisit} status={visit.statusVisit} />) : <p className = "detail__prop">No visits</p>}
            </ul>

        </section>

        <section className="client-detail__call-buttons">

            <button type  = "button" className="client-detail__start" onClick={onCall}> START CALL </button>


            <form className="detail__stop-form" onSubmit={function (event) {

                event.preventDefault()
                event.stopPropagation()

                const { statusCall: {value: statusCall} } = event.target

                {statusCall ? onStop(statusCall) : setError('Please set status call')}
            }}>
                <div className = "client-detail__result-form">

                    <label htmlFor="client-detail__result-label">Result Call</label>
                    <input className="client-detail__call-result" type="text" name="statusCall" placeholder=" N.A - A "/>

                </div>
                <button className = "client-detail__stop">STOP CALL</button>

            </form>
         
            { client && <AgentCreateVisit client = {client} control={control} setControl={setControl}/> } 


        </section>


    </section >
})