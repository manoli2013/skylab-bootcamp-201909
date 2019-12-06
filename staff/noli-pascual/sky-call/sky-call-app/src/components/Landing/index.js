import React from 'react'

export default function (onRegister, onLogin) {

    return <section className='landing'>

        <div className='landing__image-container'>

            <figure className="landing__figure">
                <figcaption className='landing__caption'> <h2 className="landing__title">Welcome to SkyCall</h2></figcaption>

                <img className='landing__image' src="./images/phone2.jpg" alt="landing-image-telephone" />


            </figure>

            <section className="landing__link-container">

                <div class="landing__option-container">

                    <button class="landing__option" href="" onClick={event => {
                        event.preventDefault()
                        
                        onRegister()

                    }}> Register </button>

                    <button class="landing__option" href="" onClick={event => {
                        event.preventDefault()

                        onLogin()

                    }}> Login</button>

                </div>

            </section>


        </div>

    </section>

}