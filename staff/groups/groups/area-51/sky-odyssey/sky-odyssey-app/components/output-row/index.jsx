function OutputRow({ row, onClick, onFav }) {

    const { isFav, flight_number: id, mission_name: mission, links: { mission_patch_small: image }, launch_year: year } = row

    return <li className="row">
        <a className="row__link" onClick={event => {
            event.preventDefault()
            onClick(id)

        }}>
            <h2 className="row__mission">{mission}</h2>
            <h3 className="row__year">{year}</h3>

            <img className="row__image" src={image} alt="row" />

            {sessionStorage.id && sessionStorage.token ? <span className="row__fav" onClick={event => {
                event.preventDefault()
                event.stopPropagation()
                onFav(id)
            }} > {isFav ? 'OK' : 'KO'}</span> : ''}
        </a>
    </li>


}
