import React from 'react'
//TO DO BOTTONES

export default function ({ onCall, onUpdateCall, onStop, onUpdate, callsClient, visitsClient, client: { id, nameClient, surnameClient, tel, location, address } }) {

    return <section className="client-detail detail">

        <form className = "detail__form" on submit = {function(event) {

            event.preventDefault()

            const {nameClient: {value: nameClient}, surnameClient: {value: surnameClient}, tel: {value: tel}, location: {value: location}, address: {value: address}} = event.target

            onUpdate(nameClient, surnameClient, tel, location, address)
        }}>
            <h1>Client Details</h1>

            <input className="detail__title">name{nameClient} </input>
            <input className="detail__title">surname{surnameClient} </input>
            <input className="detail__title">tel{tel} </input>
            <input className="detail__title">location{location} </input>
            <input className="detail__title">adrress{address} </input>

            <button className = "detail__submit">Update</button>

        </form>
        
        <section className = "detail__info">
            <h2>Client calls</h2>
            <ul className = "detail__calls">
                {callsClient.map(call => <li className = "detail__array" key = {call.id}>

                    <p className="detail__prop">{call.agent}</p>
                    <p className="detail__prop">{call.created}</p>
                    <p className="detail__propt">{call.statusCall}</p>

                </li>)}
            </ul>

            <h2>Client visits</h2>
            <ul className = "detail__visits">
                {visitsClient.map(visit => <li className = "detail__array" key = {visit.id}>

                    <p className="detail__prop">{visit.agent}</p>
                    <p className="detail__prop">{visit.dateVisit}</p>
                    <p className="detail__prop">{visit.statusVisit}</p>

                </li>)}
            </ul>

        </section>

        <section className = "client__call-buttons">

            <button className = "client__call" onClick = {function(event)  {
                event.preventDefault()

                onCall(token, id)

            }} > START CALL </button>
            
            <button className = "client__stop" onClick = {function(event)  {
                event.preventDefault()

                onStop(token, id)

            }} > STOP CALL </button>

            <form className = "client__call-update" onSubmit = {function(event) {
                event.preventDefault()
                const {result: {value: result} }= event.target

            onUpdateCall(result)
            }}>
                <input className="client__call-result" type="text" name="result" placeholder="result" />
            </form>


        </section>
        

    </section>
}