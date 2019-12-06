import React from 'react'

export default function ({ call: { agent, created, statusCall, calling, finished, duration } }) {

    return <section className = 'call-item'>

        <div className='call-item__field' type="text" name='agent' value={agent} />
        <div className='call-item__field' type="text" name='created' value={created} />
        <div className='call-item__field' type="text" name='statusCall' value={statusCall} />
        <div className='call-item__field' type="text" name='calling' value={calling} />
        <div className='call-item__field' type="text" name='finished' value={finished} />
        <div className='call-item__field' type="text" name='duration' value={duration} />
    
    </section> 
        

}
