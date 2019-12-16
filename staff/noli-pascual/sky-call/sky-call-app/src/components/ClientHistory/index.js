import React, { useEffect, useState} from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

import { retrieveUser } from '../../logic'

export default withRouter(function ({ history, formatDate, id, date, status } ) {

    const [ name, setName ] = useState()
    const [ convertDate, setConvertDate ] = useState()
    
    useEffect(() => {

        const { token } = sessionStorage;
        (async () => {
            if (token) {
                const user = await retrieveUser(token, id)
                setName(user.name)
                setConvertDate(moment.utc(date).add(2, 'hours').format(formatDate))
            } else history.push('/')
        })()
    })

    return <li className="client-detail-array" key={id}>

            {name && <p className="client-detail-prop">{name}</p>}
            <p className="client-detail-prop">{convertDate}</p>
            <p className="client-detail-prop">{status}</p>

        </li>

})
