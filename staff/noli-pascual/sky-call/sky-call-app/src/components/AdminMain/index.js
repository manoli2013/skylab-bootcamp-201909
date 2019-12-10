import React from 'react'
import './index.sass'
import { withRouter } from 'react-router-dom'


import Feedback from '../Feedback'


function AdminMain({ history, error }) {
    


    function handleLogout() {
        sessionStorage.clear()
        handleGoBack()
    }
    function handleGoBack(event) {
        event.preventDefault()
        history.push('/')
    }

    // //Admin informes


    function onGeneralReport() { history.push('/general-report') }
    function onAgentsReport() { history.push('/agents-report') }
    function onCallsReport() { history.push('/calls-report') }
    function onCreateClient() {history.push('/create-client') }
    


    return <section className='admin main'>
        <h1 className="main-title">ADMIN AREA</h1>
        <nav className="admin__nav-container">

            <ul className="admin__nav-list">
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
            <a className="login__back" href="" onClick={event => {
                event.preventDefault()

                handleGoBack()
            }}>Go back</a>
            <a className="login__back" href="" onClick={event => {
                event.preventDefault()

                handleLogout()
            }}>Logout</a>


        </nav>


        {error && <Feedback message={error} />}

    </section>
}
export default withRouter(AdminMain)

