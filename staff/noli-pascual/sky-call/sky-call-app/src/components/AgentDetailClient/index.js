import React from 'react'


export default function ({ client: { id, name, surname, tel, location, address, calls, visits } }) {

    return <section className="client-detail detail">

        <p className="detail__title">name{name}</p>
        <p className="detail__title">{surname}</p>
        <p className="detail__title">{tel}</p>
        <p className="detail__title">{location}</p>
        <p className="detail__title">{address}</p>
        <ul className = "detail__calls">
            {calls.map(call => <li className = "detail__array">

                <p className="detail__prop">{call.agent}</p>
                <p className="detail__prop">{call.created}</p>
                <p className="detail__propt">{call.statusCall}</p>

            </li>)}
            {visits.map(visit => <li className = "detail__array">

                <p className="detail__prop">{call.agent}</p>
                <p className="detail__prop">{call.created}</p>
                <p className="detail__prop">{call.statusCall}</p>

            </li>)}
        </ul>

    </section>
}