import React from 'react'
import Feedback from '../Feedback'

export default function ({ onBack, error, onCreateClient, onAddRoute, onUpdateAgent, onGeneralReport, onAgentsReport, onCallsReport }) {

    return <section className='admin main'>
        <h1 className = "main-title">ADMIN AREA</h1>
        <nav className = "admin__nav-container">

            <ul className = "admin__nav-list">
                <li clasName = "main__nav-item" onClick = {onCreateClient()}>Add Client</li>
                <li clasName = "main__nav-item" onClick = {onAddRoute()}>Add Route</li>
                <li clasName = "main__nav-item" onClick = {onUpdateAgent()}>Update Agent</li>
                <li clasName = "main__nav-item" onClick = {onGeneralReport()}>General Report</li>
                <li clasName = "main__nav-item" onClick = {onAgentsReport()}>Agents Report</li>
                <li clasName = "main__nav-item" onClick = {onCallsReport()}>Calls Report</li>

                <li clasName = "main__nav-item" onClick = {onBack()}>Go Back</li>

            </ul>
        </nav>


        {error && <Feedback message={error} />}

    </section>
}