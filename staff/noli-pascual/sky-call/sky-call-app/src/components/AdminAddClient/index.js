import React from 'react'

import Feedback from '../Feedback'

export default function ({onCreateClient, error})  {
    return <section className="add-client-form">

        <form className='client__form form' onSubmit={function (event) {
            event.preventDefault()
            const { nameClient: { value: nameClient }, surname: { value: surnameClient }, tel: { value: tel }, location: { value: location }, address: {value: address}} = event.target

            onCreateClient(nameClient, surnameClient, tel, location, address)

        }}>
            <h1 className="form__title">Create Client</h1>
            <input className="form__input-field" type="text" name="nameClient" placeholder="nameClient" />
            <input className="form__input-field" type="text" name="surnameClient" placeholder="surnameClient" />
            <input className="form__input-field" type="text" name="tel" placeholder="tel" />
            <input className="form__input-field" type="text" name="location" placeholder="location" />
            <input className="form__input-field" type="text" name="address" placeholder="address" />
          

        </form>
        {error && <Feedback message={error} />}

    </section>

}