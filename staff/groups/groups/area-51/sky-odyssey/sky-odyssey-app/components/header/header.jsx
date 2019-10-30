function Header({onLogin, onRegister, onLogout, onFavCar, onProfile, error, user}) {
        const {id} = sessionStorage
    return  <> <header className="header">

            <div className="header__bg">
                    <video autoPlay muted loop className="header__bg--video">
                            <source src="https://www.spacex.com/sites/spacex/files/spx01_fairing-1080_v3.mp4" type="video/mp4" />
                    </video>
            </div>

            <h1 className="header__title">Odyssey SpaceX</h1>

            <nav className="header__nav">
                    <div className="header__nav--logo">
                            <img title="Home" src="https://www.spacex.com/sites/spacex/files/spacex_logo_white.png"></img>
                    </div>

                {!id ?
                        
                        <div className="header__nav--bar">
                                <a className="header__nav--bar__button" onClick = {event => {
                                        event.preventDefault()
                                        onLogin()
                                }}>Login</a>
                                <a className="header__nav--bar__button" onClick = {event =>{
                                        event.preventDefault()
                                        onRegister()
                                }}>Sign Up</a>
                        </div>
                :

                        <div className="header__nav--bar">
                                <a className="header__nav--bar__button" onClick = {event => {
                                        event.preventDefault()
                                        onLogout()
                                }}>Logout</a>
                                <a className="header__nav--bar__button" onClick = {event =>{
                                        event.preventDefault()
                                        onFavCar()
                                }}>Favourites</a>
                                <a className="header__nav--bar__button" onClick = {event =>{
                                        event.preventDefault()
                                        onProfile()
                                }}>{user}</a>
                        </div>
                }
                   
            </nav>
                    
            </header>
                 
        <article className="about">
                
                <h2 className="about__title">Who we are?</h2>
                
                <div className="about__text">
                    <p className="about__text--justify">
                        Space Exploration Technologies Corp., doing business as SpaceX, is a private American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars. SpaceX has developed the Falcon launch vehicle family and the Dragon spacecraft family.
                        
                    </p>
                </div>

        </article> 

                {error && <Feedback message = {error} />}   
        </>
}