import React, { useState, useEffect } from 'react'

import { createVisit } from '../../logic'



export default function ({ client }) {

    

    const {token} = sessionStorage

    async function onCreateVisit(dateVisit, statusVisit) {


        try {
            const visit = await createVisit(token, client.id, dateVisit, statusVisit)
        } catch (error) {
            
        }
    }

    return <section className='visit'>
        <h2 className='visit__title'>Create Visit</h2>


        <form className="visit__form" onSubmit={function (event) {

            event.preventDefault()
            

            const { dateVisit: {value: dateVisit} , statusVisit: { value: statusVisit} } = event.target

            onCreateVisit(dateVisit, statusVisit)
        }}>
            <div className = "visit__input-container">

            <label htmlFor = "date" className = "visit__label">Date</label>
            <input className="visit__input" type="text" name="dateVisit" placeholder=" 2019-12-10 " />

            </div>

            <div className = "visit__input-container">

            <label htmlFor = "statusVisit" className = "visit__label">Status</label>
            <input className="visit__input" type="text" name="statusVisit" placeholder=" OK, NO, PDTE" />
            </div>

            <button className="visit__submit">CREATE</button>

        </form>

    </section>
}