import React, { useState, useEffect } from 'react'

import { createVisit } from '../../logic'



export default function ({ client: { id } }) {

    async function onCreateVisit(dateVisit, statusVisit) {

        const {token} = sessionStorage

        try {
            const visit = await createVisit(token, id, dateVisit, statusVisit)
        } catch (error) {
            
        }
    }

    return <section class='visit'>
        <h2 class='visit__title'>Create Visit</h2>


        <form className="visit__form" onSubmit={function (event) {

            event.preventDefault()

            const { dateVisit: {value: dateVisit} , statusVisit: { value: statusVisit} } = event.target

            onCreateVisit(dateVisit, statusVisit)
        }}>
            <label for="date" className = "visit__label">Date</label>
            <input className="visit__input" type="text" name="date" placeholder=" 2019-12-10 " />

            <label for="date" className = "visit__label">Status</label>
            <input className="visit__input" type="text" name="statusVisit" placeholder=" OK, NO, PDTE" />

            <button className="visit__submit">CREATE</button>

        </form>

    </section>
}