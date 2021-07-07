function Login({onLogin, error, onBack}) {//pending back button 
    return  <section className="active login">

            <div className = "login__container">

                <form className = "login__form content" onSubmit = {event => {
                            event.preventDefault()
                            const {email: {value: email}, password: {value: password}} = event.target
                            
                            onLogin(email,password)
                }}>
                      
                    <h1 className="content__title">LOGIN</h1>

                    <label className = "content__label" htmlFor="email">e-mail</label>
                    <input className="content__input" type="email" name="email" />

                    <label className = "content__label" htmlFor="password">Password</label>
                    <input className="content__input" type="password" name="password" />

                    <button className="content__submit content__button" >Send</button>
                    <a className="content__back" href="" onClick={event => {
                        event.preventDefault()

                        onBack()
                    }}>Go back</a>

                </form>
                {error && <Feedback message = {error} />}
            </div>

        </section>
    
}