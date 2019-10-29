function Login({onSubmit, error}) {//pending back button 
    return <> 
    
        <section className="active login">

            <div className = "login__container">

                <form className = "login__form form">

                    <div className = "login__content content">

                        <h1 className="content__title">LOGIN</h1>

                        <label className = "content__label" for="email">e-mail</label>
                        <input className="content__input" type="email" name="email" />

                        <label className = "content__label" for="password">Password</label>
                        <input className="content__input" type="password" name="password" />

                        <button className="content__submit content__button" onClick = {event => {
                            event.preventDefault()
                            
                            const {email: {value: email}, password: {value: password}} = event.target
                            alert('ha entrado')
                            onSubmit(email,password)
                        }}>Send</button>
                    
                    </div>

                </form>
            
            </div>

        </section>
    </>
}