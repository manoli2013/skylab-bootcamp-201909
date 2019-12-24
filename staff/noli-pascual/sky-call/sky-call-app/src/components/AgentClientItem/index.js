import React, {useState} from 'react'
import AgentDetailClient from '../AgentDetailClient'
import Feedback from '../Feedback'


export default function ( { client} ) {

    const [control, setControl] = useState(false)
    const [error, setError] = useState(undefined)
    
    const [_client, setClient] = useState(client)
    

    return <li className='client-item'>
        

        <a href="#" className="client-item__link" onClick={event => {
            event.preventDefault()
            setControl(!control)
        }}>
            <div className = "client-item__area">
                <p className="client-item__field">{_client.nameClient}</p>
                <p className="client-item__field">{_client.surnameClient}</p>
            </div>
            <div className = "client-item__area"> 
                <p className="client-item__field">{_client.tel}</p>
            <p className="client-item__field">{_client.location}</p>
            </div>
            <p className="client-item__field">{_client.address}</p>
          
            
        </a>

    {control &&  <AgentDetailClient client={_client} setClient={setClient}/> }
    {error && <Feedback error={error.message} />}
    
    </li>
}
