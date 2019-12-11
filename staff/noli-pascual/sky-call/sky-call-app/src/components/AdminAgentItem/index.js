import React from 'react'


export default function ({ agent: { name, surname, success, pending, fail, pendingCalls } }) {

    return <section className='agent-item'>


            <section className='agent-item__field field-report'>

                <h4 className="field-report__title">NAME</h4>
                <p className="field-report__subtitle">{name}</p>

            </section>

            <section className='agent-item__field field-report'>

                <h4 className="field-report__title">SURNAME</h4>
                <p className="field-report__subtitle">{surname}</p>

            </section>

            <section className='agent-item__field field-report'>

                <h4 className="field-report__title">SUCCESS</h4>
                <p className="field-report__subtitle">{success}</p>

            </section>

            <section className='agent-item__field field-report'>
                <h4 className="field-report__title">PENDING</h4>
                <p className="field-report__subtitle">{pending}</p>

            </section>

            <section className='agent-item__field field-report'>

                <h4 className="field-report__title">FAIL</h4>
                <p className="field-report__subtitle">{fail}</p>

            </section>

            <section className='agent-item__field field-report'>
                <h4 className="field-report__title">P.CALLS</h4>
                <p className="field-report__subtitle">{pendingCalls}</p>

            </section>


    </section>


}
