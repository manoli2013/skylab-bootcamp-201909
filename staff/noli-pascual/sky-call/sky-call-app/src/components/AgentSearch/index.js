import React from 'react'
import Feedback from '../Feedback'

export default function ({ error, clients, visits, calls, onSubmitStatus, onSubmitRoute }) {

    return <section className="search">
        <h1 className="search__title">Search</h1>
        
        <div class = "search__container">

            <form className="search__route" onSubmit = {event => {
                event.preventDefault()
                const queryRoute = event.target.select.value

                onSubmitRoute(queryRoute)
                
            }}>Select Route

                <select className = "search__select" name="select">
                    <option value="Barcelona">Barcelona</option>
                    <option value="Girona" >Girona</option>
                    <option value="Madrid">Madrid</option>
                </select>

            </form>

            <form className="search__status" onSubmitStatus={event => {
                event.preventDefault()
                
                //TODO destructuring
                const queryStatus = event.target.query.value || ''
                
                onSubmitStatus(queryStatus)
            }}>
                
                <input className="search__criteria" type="text" name="query" placeholder="status call" defaultValue={query} />

                <button className="search__submit">🔍</button>

            </form>

        </div>

        {error && <Feedback message={error} />}

        {clients && <AgentClientResults clients = {clients} visits = {visits} calls = {calls} />}


    </section>
}