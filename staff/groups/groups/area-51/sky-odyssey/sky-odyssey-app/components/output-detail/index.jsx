function DetailLaunch({ launch, onBack }) {

    const { launch_date_local: date, launch_success: success, mission_name: mission, launch_site: { site_name_long: site }, launch_year: year, links: { flickr_images: images }, details, links: { mission_patch: logo, video_link, youtube_id } } = launch
    console.log(video_link)
    return <section className="active detail">

            <figure className="detail__banner">

                <img className="detail__image" src={images[0] ? images[0] : logo} alt="detail" />

                <figcaption className="detail__caption">{mission} {year}</figcaption>

            </figure>

            <section className="detail__main main">

                <h1 className="main__site">{site}</h1>

                <h4 className="main__date">{date}</h4>

                {details.length > 0 && <p className="main__details">{details}</p>}
                    
                

            </section>

            <section className="main__media media">

                <ul className="media__gallery">

                    {
                        images.splice(0, 3).map(img =>
                            <li className="media__item"> <img className="media__image" src={img} /> </li>
                        )
                    }

                </ul>

                <a href = {video_link} className="media__video">
                    <img width="150px" height="150px" src= './youtube.png' />

                </a>

            </section>


            <section className="detail__footer footer">

                <span className="footer__fav">💔</span>

                <a className="detail__back" href="" onClick={event => {
                    event.preventDefault()

                    onBack()
                }}>Go back</a>

            </section>

     
    </section>
}