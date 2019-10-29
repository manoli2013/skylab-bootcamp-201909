function Search({}) {
    return   <section className="search">
            
    <div className="search__bar">

        <input type="text" className="search__bar--searchTerm" placeholder="What are you looking for?" />

        <button type="submit" className="search__bar--searchButton">
            <ion-icon name="planet"></ion-icon>
        </button>
        
    </div>

    <div className="search__checks">
        <button className="search__checks--button">Launch</button>
        <button className="search__checks--button">Mission</button>
    </div>

</section>
}