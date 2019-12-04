import React from 'react'

import Feedback from '../Feedback'

export default function ({ onRegister, onBack, error }) {
    return <section className="register">

        <form className='register__form form' onSubmit={function (event) {
            event.preventDefault()
            const { name: { value: name }, surname: { value: surname }, username: { value: username }, password: { value: password } } = event.target

            onRegister(name, surname, username, password)

        }}>
            <h1 className="form__title">Register</h1>
            <input className="form__input-field" type="text" name="name" placeholder="name" />
            <input className="form__input-field" type="text" name="surname" placeholder="surname" />
            <input className="form__input-field" type="text" name="username" placeholder="username" />
            <input className="form__input-field" type="password" name="password" placeholder="password" />
            <br></br>

            <button className="form__submit">Submit</button>
            <a className="form__back" href="#" onClick={event => {
                event.preventDefault()

                onBack()
            }}>Go back</a>

        </form>
        {error && <Feedback message={error} />}

    </section>

}