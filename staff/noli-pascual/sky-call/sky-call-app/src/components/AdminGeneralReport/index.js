import React from 'react'

export default function ({  }) {

    // const { calls, answered, pending, visits, fails, calling } = agentsReport


    return <section className='report'>

        <section className='report__container'>

            <h2 className='report__title'>General Data</h2>

            <section className='report__results'>

                    <div className='report-row'>{'calls'}</div>
                    <div className='report-row' type="text" name='answered' value={'answered'} />
                    <div className='report-row' type="text" name='pendng' value={'pending'} />
                    <div className='report-row' type="text" name='visits' value={'visits'} />
                    <div className='report-row' type="text" name='fails' value={'fails'} />
                    <div className='report-row' type="text" name='calling' value={'calling'} />

            </section>

        </section>


    </section>
}