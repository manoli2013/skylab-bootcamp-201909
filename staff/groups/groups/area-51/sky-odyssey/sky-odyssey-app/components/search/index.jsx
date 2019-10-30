function Search({onSearch, query, error, output, onOutputRender }) {
    return <section className="search">
            
    <div className="search__bar">
        <form className = "search__form" onSubmit = {event => {debugger
            event.preventDefault()
            const query = event.target.query.value

            onSearch(query)

        }}>

            <input type="text" className="search__bar--searchTerm" placeholder="What are you looking for?" name = "query" defaultValue = {query}/>

            <button type="submit" className="search__bar--searchButton">
            search
            </button>
        </form>
    </div>
    {error && <Feedback message={error} />}
    {output && onOutputRender(output)}

</section>
}
//cuando haya output, renderízalo