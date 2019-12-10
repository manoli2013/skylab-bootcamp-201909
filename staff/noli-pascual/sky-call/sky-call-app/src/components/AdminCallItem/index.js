import React from 'react'

export default function ({ call: { agent, created, statusCall, calling, finished, duration } }) {

    return <section className = 'call-item'>

        <div className='call-item__field'>Agent: {agent}</div>
        <div className='call-item__field'>Issued: {created} </div>
        <div className='call-item__field'>Status: {statusCall} </div>
        <div className='call-item__field'>IsCalling: {calling}</div>
        <div className='call-item__field'>Finished: {finished}</div>
        <div className='call-item__field'>Duration: {duration} </div>
    
    </section> 
        

}
