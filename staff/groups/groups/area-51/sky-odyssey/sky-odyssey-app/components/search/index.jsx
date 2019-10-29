function Search({onSearch, query}) {
    return   <section className="search">
            
    <div className="search__bar">
        <form className = "search__form" onSubmit = {event => {
            event.preventDefault()
            const query = event.target.query.value

            onSearch(query)

        }}>

            <input type="text" className="search__bar--searchTerm" placeholder="What are you looking for?" name = "query" defaultValue = {query}/>

            <button type="submit" className="search__bar--searchButton">
                <ion-icon name="planet"></ion-icon>
            </button>
        </form>
    </div>

</section>
}