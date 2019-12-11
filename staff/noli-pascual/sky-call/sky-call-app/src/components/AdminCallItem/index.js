import React from 'react'

export default function ({ call: { agent, created, statusCall, calling, duration } }) {

    return <section className='call-item'>

        <section className="call-item__container">

            <section className='call-item__field field-1'>

                <h4 className="field-1__title">AGENT</h4>
                <p className="field-1__subtitle">{agent}</p>

            </section>

            <section className='call-item__field field-1'>

                <h4 className="field-1__title">CREATED</h4>
                <p className="field-1__subtitle">{created}</p>

            </section>

            <section className='call-item__field field-1'>

                <h4 className="field-1__title">STATUS</h4>
                <p className="field-1__subtitle">{statusCall}</p>

            </section>

            <section className='call-item__field field-1'>
                <h4 className="field-1__title">CALLING</h4>
                <p className="field-1__subtitle">{calling}</p>

            </section>

            <section className='call-item__field field-1'>

                <h4 className="field-1__title">DURATION</h4>
                <p className="field-1__subtitle">{duration}</p>

            </section>

        </section>


    </section>


}
