import React from 'react'
//TO DO BOTTONES

export default function ({ onCall, onStop, client: { id, nameClient, surnameClient, tel, location, address, calls, visits }, onUpdate}) {

    return <section className="client-detail detail">

        <section className = "client__call-buttons">
            <button className = "client__call" onClick = {function(event => {
                event.preventDefault()

                onCall(token, id)

            })} >Call </button>
            
            <button className = "client__stop" onClick={function(event) => {
                 event.preventDefault()

                 onCall(token, id)

            }}>Stop</button>
        
        </section>

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
            {calls.map(call => <li className = "detail__array">

                <p className="detail__prop">Agent{call.agent}</p>
                <p className="detail__prop">created{call.created}</p>
                <p className="detail__propt">statusCall{call.statusCall}</p>

            </li>)}
        </ul>

        <h2>Client visits</h2>
        <ul className = "detail__visits">
            {visits.map(visit => <li className = "detail__array">

                <p className="detail__prop">Agent{visit.agent}</p>
                <p className="detail__prop">date{visit.dateVisit}</p>
                <p className="detail__prop">statusVisit{visit.statusVisit}</p>

            </li>)}
        </ul>

        </section>
        

    </section>
}