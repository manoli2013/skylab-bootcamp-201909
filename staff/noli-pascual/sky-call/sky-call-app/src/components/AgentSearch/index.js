import React from 'react'
import Feedback from '../Feedback'
import AgentClientResults from '../AgentClientResults'
import { searchClients } from '../../logic'
import { withRouter } from 'react-router-dom'

function AgentSearch({ history }) {
    let error

    const { token } = sessionStorage

    const [clients, SetClients] = useState([])

    useEffect(() => {
        debugger
        (async () => {
            if (token) {
                const clients = await searchClients(token, location)
                setClients(clients)

            }
        })()
    }, [location])

    function handleSelect() {
        event.preventDefault()

        const location = event.target.value
    }

    return <section className="search">
        <h1 className="search__title">Search</h1>

        <div className="search__container">


            <select className="search__route" name="select" onChange={handleSelect}
            >Select Route
                <option value="Asturias">Asturias </option>
                <option value="Valencia">Valencia</option>

            </select>

        </div>

        {error && <Feedback message={error} />}

        {clients && <AgentClientResults clients={clients} />}

    </section>
}