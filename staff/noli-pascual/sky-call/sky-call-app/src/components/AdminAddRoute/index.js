import React from 'react'

import Feedback from '../Feedback'

export default function ({onAddRoute, error})  {
    return <section className="add-route">

        <form className='add-route__form form' onSubmit={function (event) {
            event.preventDefault()
            const { user: { value: user }, location: { value: location }, statusRoute: { value: statusRoute }} = event.target

            onAddRoute(user, location, statusRoute)

        }}>
            <h1 className="form__title">Create Route</h1>

            <input className="form__input-field" type="text" name="user" placeholder="user" />
            <input className="form__input-field" type="text" name="location" placeholder="location" />
            <input className="form__input-field" type="text" name="statusRoute" placeholder="statusRoute" />
          
        </form>
        {error && <Feedback message={error} />}

    </section>

}