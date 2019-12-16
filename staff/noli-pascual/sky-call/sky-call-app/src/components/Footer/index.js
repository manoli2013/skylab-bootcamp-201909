import React from 'react'
import { withRouter } from 'react-router-dom'


export default withRouter(function ({ history }) {


    async function goOut(event) {

        event.preventDefault()
        sessionStorage.clear()
        history.push('/')

    }

    return <footer className='footer'>

        <section className='footer__container'>
            <div className = "footer__copyright">Developed by Manuela Pascual Sáez</div>

            <a className='footer__logout' onClick={goOut}>LOGOUT</a>

        </section>

    </footer>
})