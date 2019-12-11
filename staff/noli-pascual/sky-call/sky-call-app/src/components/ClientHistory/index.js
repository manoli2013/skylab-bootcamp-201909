import React, { useEffect, useState} from 'react'
import { withRouter } from 'react-router-dom'

import { retrieveUser } from '../../logic'

export default withRouter(function ({ history, id, date, status } ) {

    const [ name, setName ] = useState()
    
    useEffect(() => {

        const { token } = sessionStorage;
        (async () => {
            if (token) {
                const user = await retrieveUser(token, id)
                setName(user.name)
            } else history.push('/')
        })()
    })

    return <>
        <li className="client-detail__array" key={id}>

            {name && <p className="detail__prop">{name}</p>}
            <p className="detail__prop">{date}</p>
            <p className="detail__propt">{status}</p>

        </li>
    </>

})
