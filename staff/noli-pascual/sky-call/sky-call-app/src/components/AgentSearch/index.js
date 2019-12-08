import React from 'react'
import Feedback from '../Feedback'
import AgentClientResults from '../AgentClientResults'

export default function ({ error, clients, onSubmitRoute }) {
    debugger

    return <section className="search">
        <h1 className="search__title">Search</h1>

        <div className="search__container">


            <select className="search__route" name = "select" onChange= { event => {
                debugger
                event.preventDefault()
                const query = event.target.select.value

                onSubmitRoute(query)

            }}>Select Route
                <option value = "5de4f8697b29d23ad97269f2">Asturias </option>
                <option value = "5de4f8377b29d23ad97269f1">Barcelona</option>
            </select>


            {/* <form className="search__route" onSubmit={event => {
                debugger
                event.preventDefault()
                const queryRoute = event.target.query.value

                onSubmitRoute(queryRoute)

            }}>Select Route
                <input className="search__input" name="queryRoute" placeholder="route" />
                <button className="search__submit" type="submit"><i className="fas fa-search"></i></button>
            </form> */}

        </div>

        {error && <Feedback message={error} />}

        {clients && <AgentClientResults clients={clients} />}


    </section>
}