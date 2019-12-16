import React from 'react'
import './index.sass'
import { withRouter } from 'react-router-dom'


import Feedback from '../Feedback'


function AdminMain({ history, error }) {
    

    // //Admin informes


    function onGeneralReport() { history.push('/home/general-report') }
    function onAgentsReport() { history.push('/home/agents-report') }
    function onCallsReport() { history.push('/home/calls-report') }
    function onCreateClient() {history.push('/home/create-client') }
    


    return <section className='admin main'>
        <h1 className="main__title">ADMIN AREA</h1>
        <nav className="main__nav-container">

            <ul className="main__nav-list">
                <li><a className="main__nav-item" onClick={event => {
                    event.preventDefault()
                    onCreateClient()
                }}>Add Client </a></li>

                <li><a className="main__nav-item" onClick={event => {
                    event.preventDefault()
                    onGeneralReport()
                }}>General Report </a></li>

                <li><a className="main__nav-item" onClick={event => {
                    event.preventDefault()
                    onAgentsReport()
                }}>Agents Report </a></li>

                <li><a className="main__nav-item" onClick={event => {
                    event.preventDefault()
                    onCallsReport()
                }}>Calls Report </a></li>

            </ul>
            

        </nav>


        {error && <Feedback message={error} />}

    </section>
}
export default withRouter(AdminMain)

