import React from 'react'
import AgentDetailClient from '../AgentDetailClient'


export default function ( client, onDetail ) {

    const { id, name, surname, tel, location, address } = client

    return <li className='client-item item'>
        <h1> Detail Client</h1>

        <a href="#" className="item__link" onClick={event => {
            event.preventDefault()
            
            onDetail(id)
        }}>
            <p className="item__title">{name}</p>
            <p className="item__title">{surname}</p>
            <p className="item__title">{tel}</p>
            <p className="item__title">{location}</p>
            <p className="item__title">{address}</p>
          
            
        </a>

    {client && <AgentDetailClient client = {client} /> }
    
    </li>
}
