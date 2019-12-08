import React from 'react'
import Feedback from '../Feedback'

export default function ({ onLogin, onBack, error }) {

    return <section className="login">

        <form className='login__form form' onSubmit={function (event) {
            event.preventDefault()

            const { username: { value: username }, password: { value: password } } = event.target
            
            //llamo a la función onLogin que se redirigirá al login page, pasando props
             onLogin(username, password)
        }}>
            <h1 className="form__title">Login</h1>

            <input className="form__field" type="text" name="username" placeholder="username" />
            <input className="form__field" type="password" name="password" placeholder="password" />
            <br></br>
            {/* TODO ocular el siguiente input */}


            <button className = "form__submit">Submit</button>
            <a className="form__back" href="" onClick={event => {
                event.preventDefault()

                onBack()
            }}>Go back</a>

        </form>

        {error && <Feedback message={error} />}

    </section>
}

