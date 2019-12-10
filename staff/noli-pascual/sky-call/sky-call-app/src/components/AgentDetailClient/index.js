import React, { useState, useEffect } from 'react'
import AgentCreateVisit from '../AgentCreateVisit'

import { retrieveClient, createCall, stopCall, updateClient } from '../../logic'


export default function ({ client: { id, nameClient, surnameClient, tel, location, address } }) {


    const [callsClient, setCallsClient] = useState([])
    const [visitsClient, setVisitsClient] = useState([])
    const [client, setClient] = useState()
    const [call, setCall] = useState(undefined)
    

    useEffect(() => {
        const { token } = sessionStorage;

            (async () => {
                if (token) {

                    const client = await retrieveClient(token, id)

                    setClient(client)

                    const { callsClient, visitsClient } = client

                    setCallsClient(callsClient)
                    setVisitsClient(visitsClient)

                }
            })()
    }, [sessionStorage.token])


    async function onCall() {

        const { token } = sessionStorage
        try {

            const callCreated = await createCall(token, id)
            setCall(callCreated)


        } catch (error) {
            console.error(error.message)
        }
    }

    async function onUpdate(id, name, surname, telephone, loc, add) {debugger

        const {token} = sessionStorage
        
        try {

            await updateClient(token, id, name, surname, telephone, loc, add)

        } catch (error) {

            console.error(error.message)
        }
    }

    async function onStop(statusCall) {

        const {token} = sessionStorage
        
        try {

            await stopCall (token, id, call.id, statusCall)
        } catch (error) {
            console.error(error.message)
        }
    }


    return <section className="client-detail detail">

        <form className="detail__form" on submit={function (event) {

            event.preventDefault()

            const { nameClient: { value: name }, surnameClient: { value: surname }, tel: { value: telephone }, location: { value: loc }, address: { value: add } } = event.target

            onUpdate(name, surname, telephone, loc, add)
        }}>
            <h1>Client Details</h1>

            <input className="detail__title" name="nameClient" placeholder={nameClient}></input>
            <input className="detail__title" name="surnameClient" placeholder={surnameClient}></input>
            <input className="detail__title" name='tel' placeholder={tel}></input>
            <input className="detail__title" name="location" placeholder={location}></input>
            <input className="detail__title" name="address" placeholder={address}></input>

            <button className="detail__submit">Update</button>

        </form>

        <section className="detail__info">
            <h2>Client calls</h2>
            <ul className="detail__calls">
                {callsClient.map(call => <li className="detail__array" key={call.id}>

                    <p className="detail__prop">{call.agent}</p>
                    <p className="detail__prop">{call.created}</p>
                    <p className="detail__propt">{call.statusCall}</p>

                </li>)}
            </ul>

            <h2>Client visits</h2>
            <ul className="detail__visits">
                {visitsClient.map(visit => <li className="detail__array" key={visit.id}>

                    <p className="detail__prop">{visit.agent}</p>
                    <p className="detail__prop">{visit.dateVisit}</p>
                    <p className="detail__prop">{visit.statusVisit}</p>

                </li>)}
            </ul>

        </section>

        <section className="client__call-buttons">

            <button className="client__call" onClick={function (event) {
                event.preventDefault()
                const { token } = sessionStorage
                onCall(token, id)

            }} > START CALL </button>


            <form className="detail__form" on submit={function (event) {

                event.preventDefault()

                const { statusCall: {value: statusCall} } = event.target

                onStop(statusCall)
            }}>
                <label for="result">Result Call</label>
                <input className="client__call-result" type="text" name="statusCall" placeholder=" N.A - A " />
                <button className = "client__stop">STOP CALL</button>

            </form>

            { client && <AgentCreateVisit client = {client} /> } 


        </section>


    </section >
}