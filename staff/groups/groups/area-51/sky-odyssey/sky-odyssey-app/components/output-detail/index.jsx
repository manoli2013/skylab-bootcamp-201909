function DetailLaunch({ launch, onBack }) {

    const { launch_date_local: date, launch_success: success, mission_name: mission, launch_site: { site_name_long: site }, launch_year: year, links: { flickr_images: images }, details, video_link: video, links: { mission_patch: logo } } = launch

    return <section className="active detail">

        <div className="detail__container">

            <figure className="detail__banner">

                <img className="detail__image" src={images[0] ? images[0] : logo} alt="detail" />
                {console.log(images)}
                <figcaption className="detail__caption">{mission} {year}</figcaption>

            </figure>

            <section className="detail__main main">

                <h1 className="main__site">{site}</h1>
                <h3 className="main__id">`MISSION RESULT: {success}`</h3>
                <h4 className="main__date">{date}</h4>

                <p className="main__details">{details}</p>

                <section className="main__media media">

                    <ul className="main__gallery">

                        {
                            images.map(img =>
                                <li className="main__item"> <img src={img} /> </li>
                            )
                        }

                        GALERÍA</ul>

                    <figure className="main__video">
                        <video src={video}></video>
                    </figure>

                </section>

            </section>

            <section className="detail__footer footer">

                <span className="footer__fav">💔</span>
                <div className="footer__button-container">

                    <button type="button" className="footer__button" href="#">Back</button>

                </div>

            </section>

        </div>

        <a className="detail__back" href="" onClick={event => {
            event.preventDefault()

            onBack()
        }}>Go back</a>
    </section>
}