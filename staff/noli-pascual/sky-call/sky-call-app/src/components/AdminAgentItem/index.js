import React from 'react'


export default function ({ agent: { name, surname, success, pending, fail, pendingCalls } }) {

    return <section className = 'agent-item'>

        <div className='agent-item__field'>name {name}</div>{name}
        <div className='agent-item__field'>surname {surname}</div> {surname}
        <div className='agent-item__field'>success {success}</div> 
        <div className='agent-item__field'>pending {pending}</div>
        <div className='agent-item__field'>fail {fail}</div>
        <div className='agent-item__field'>pendingCalls {pendingCalls}</div>
    
    </section> 
        

}
