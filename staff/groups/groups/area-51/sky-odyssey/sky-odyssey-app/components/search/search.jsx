function Search({onSearch, query, error, output, onOutputRender }) {
    return <section className="search">
   
        <form className = "search__form" onSubmit = {event => {
            event.preventDefault()
            const query = event.target.query.value
            
            onSearch(query)

        }}>

            <input type="text" className="search__bar--searchTerm" placeholder="YEAR" name = "query" defaultValue = {query}/>

            <button className="search__bar--searchButton">
            <i className="fas fa-rocket"></i>
            </button>
        </form>
    
    {error && <Feedback message={error} />}
    {output && onOutputRender(output)}

</section>
}
//cuando haya output, renderízalo