import React, {useState} from 'react'
import AgentDetailClient from '../AgentDetailClient'


export default function ( {client} ) {

    const [control, setControl] = useState(false)

    const { id, nameClient, surnameClient, tel, location, address } = client

    return <li className='client-item item'>
        <h1> Detail Client</h1>

        <a href="#" className="item__link" onClick={event => {
            event.preventDefault()
            
            setControl(!control)
        }}>
            <p className="item__title">{nameClient}</p>
            <p className="item__title">{surnameClient}</p>
            <p className="item__title">{client.tel}</p>
            <p className="item__title">{location}</p>
            <p className="item__title">{address}</p>
          
            
        </a>

    {client && <AgentDetailClient client = {client} /> }
    
    </li>
}
