function Register({onRegister, error, onBack}) {


    return <section className="active registration">
            
        <div className = "registration__container">

            <form className = "registration__form content" onSubmit = {event => {
                            event.preventDefault()
                            const {name: {value: name}, surname: {value: surname},email: {value: email}, password: {value: password}} = event.target
                            
                            onRegister(name, surname, email, password)
            }}>
                
                    <h1 className="content__title">USER REGISTRATION</h1>

                    <label className = "content__label" htmlFor="name">Name</label>
                    <input className="content__input" type="text" name="name"/>

                    <label className = "content__label" htmlFor="surname">surname</label>
                    <input className="content__input" type="text" name="surname"/>

                    <label className = "content__label" htmlFor="email">e-mail</label>
                    <input className="content__input" type="email" name="email"/>

                    <label className = "content__label" htmlFor="password">Password</label>
                    <input className="content__input" type="password" name="password"/>

                    <button className="content__submit content__button">Send</button>

                    <a className="content__back" href="" onClick={event => {
                        event.preventDefault()

                        onBack()
                    }}>Go back</a>

            </form>
            {error && <Feedback message = {error} />}
        </div>
            
            

        </section>
}