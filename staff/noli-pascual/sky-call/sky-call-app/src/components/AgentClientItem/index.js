import React, {useState} from 'react'
import AgentDetailClient from '../AgentDetailClient'


export default function ( { client} ) {

    const [control, setControl] = useState(false)
    
    const [_client, setClient] = useState(client)
    

    return <li className='client-item'>
        

        <a href="#" className="client-item__link" onClick={event => {
            event.preventDefault()
            setControl(!control)
        }}>
            <p className="client-item__field">{_client.nameClient}</p>
            <p className="client-item__field">{_client.surnameClient}</p>
            <p className="client-item__field">{_client.tel}</p>
            <p className="client-item__field">{_client.location}</p>
            <p className="client-item__field">{_client.address}</p>
          
            
        </a>

    {control &&  <AgentDetailClient client={_client} setClient={setClient}/> }
    
    </li>
}
