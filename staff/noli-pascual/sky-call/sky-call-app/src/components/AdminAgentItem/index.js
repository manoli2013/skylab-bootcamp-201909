import React from 'react'

export default function ({ agent: { name, surname, success, pending, fail, pendingCalls } }) {

    return <section className = 'agent-item'>

        <div className='agent-item__field' type="text" name='name' value={name} />
        <div className='agent-item__field' type="text" name='surname' value={surname} />
        <div className='agent-item__field' type="text" name='success' value={success} />
        <div className='agent-item__field' type="text" name='pending' value={pending} />
        <div className='agent-item__field' type="text" name='fail' value={fail} />
        <div className='agent-item__field' type="text" name='pendingCalls' value={pendingCalls} />
    
    </section> 
        

}
