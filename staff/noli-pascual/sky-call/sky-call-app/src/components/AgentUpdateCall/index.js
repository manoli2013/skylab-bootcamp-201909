import React from 'react'

import Feedback from '../Feedback'

export default function ({user, client, onUpdateCall, error})  {

    return <section className="add-call call">

        <form className='call__form form' onSubmit={function (event) {
            event.preventDefault()
            const { statusCall: {value: statusCall}} = event.target

            onUpdateCall(user, client, statusCall)

        }}>
            <h1 className="form__title">Create Call</h1>


            <input className="form__input-field" type="text" name="statusCall" placeholder="statusCall" />
            

        </form>
        {error && <Feedback message={error} />}

    </section>

}