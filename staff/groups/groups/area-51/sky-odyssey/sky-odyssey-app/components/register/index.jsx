function Register({onSubmit, error}) {


    return <>
        <section className="active registration">
            
        <div className = "registration__container">

            <form className = "registration__form form">
                <div className = "registration__content content">

                    <h1 className="content__title">USER REGISTRATION</h1>

                    <label className = "content__label" for="name">Name</label>
                    <input className="content__input" type="text" name="name"/>

                    <label className = "content__label" for="surname">surname</label>
                    <input className="content__input" type="text" name="surname"/>

                    <label className = "content__label" for="email">e-mail</label>
                    <input className="content__input" type="email" name="email"/>

                    <label className = "content__label" for="password">Password</label>
                    <input className="content__input" type="password" name="password"/>

                    <button className="content__submit content__button" onClick = {event => {
                        event.preventDefault()
                        const { name: { value: name }, surname: { value: surname }, email: { value: email }, password: { value: password } } = event.target
                        
                        onSubmit(name, surname, email, password)

                    }}>Send</button>

                </div>

            </form>
            
        </div>
                
        </section>

    </>
}