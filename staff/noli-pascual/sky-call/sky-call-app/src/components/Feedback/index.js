import React from 'react'

export default function Feedback({ message }) {
    return <section className="feedback">
        <span className="feedback__icon">ICon</span>
        <p className="feedback__message">{message}</p>
        <span className="feedback__icon">Icon</span>
    </section>
}