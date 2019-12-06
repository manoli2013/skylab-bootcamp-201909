import React from 'react'

import Feedback from '../Feedback'

export default function ({onUpdateAgent, error})  {
    return <section className="update-agent">

        <form className='update-agent__form form' onSubmit={function (event) {
            event.preventDefault()
            const { name: { value: name }, surname: { value: surname }, username: { value: username }, password: {value: password}, role: {value: role}} = event.target

            onUpdateAgent(name, surname, username, password, role)

        }}>
            <h1 className="form__title">Update Agent</h1>

            <input className="form__input-field" type="text" name="name" placeholder="name" />
            <input className="form__input-field" type="text" name="surname" placeholder="surname" />
            <input className="form__input-field" type="text" name="username" placeholder="username" />
            <input className="form__input-field" type="text" name="password" placeholder="password" />
          
        </form>
        
        {error && <Feedback message={error} />}

    </section>

}