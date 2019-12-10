import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import Feedback from '../Feedback'
import {createClient} from '../../logic'

export default withRouter (function ({history})  {

    const [error, setError] = useState()
    const [answer, setAnswer] = useState()

    async function onCreateClient(nameClient, surnameClient, tel, location, address) {

        try {
            const {token} = sessionStorage
            
            await createClient(token, nameClient, surnameClient, tel, location, address)

        } catch (error) {

            console.error(error)
        }
    }

    async function onBack(event) {
        event.preventDefault()
        history.push('/admin')
    }
    return <section className="add-client-form">

        <form className='client__form form' onSubmit={function (event) {
            event.preventDefault()
            let val = event.target.nameClient.value
            console.log(val)
            
        const { nameClient: { value: nameClient }, surnameClient: { value: surnameClient }, tel: { value: tel }, location: { value: location }, address: {value: address}} = event.target

            onCreateClient(nameClient, surnameClient, tel, location, address)

        }}>
            <h1 className="form__title">Create Client</h1>
            <input className="form__input-field" type="text" name="nameClient" placeholder="nameClient" />
            <input className="form__input-field" type="text" name="surnameClient" placeholder="surnameClient" />
            <input className="form__input-field" type="text" name="tel" placeholder="tel" />
            <input className="form__input-field" type="text" name="location" placeholder="location" />
            <input className="form__input-field" type="text" name="address" placeholder="address" />
            <button className = "form__submit">CREATE</button>

            <a className="form__back" href="#" onClick={event => {
                event.preventDefault()

                onBack()
            }}>Go back</a>

        </form>
        {error && <Feedback message={error} />}

    </section>

})