import React from 'react'

export default function Feedback({ message }) {
    return <section className="feedback">
        <div className = "feedback__content">

       
        <p className="feedback__message">{message}</p>

        </div>
        
    </section>
}