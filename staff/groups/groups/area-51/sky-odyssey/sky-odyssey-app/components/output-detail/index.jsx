function DetailLaunch({item, onBack}) {

    const { launch_date_local: date, launch_success: success, mission_name: mission, launch_site: {site_name_long: site}, launch_year: year, links: {flickr_images: image}, details, video_link: video} = item

    return <section className="active detail">

    <div className = "detail__container">

        <figure className = "detail__banner">

            <image className = "detail__image" src= {image[0]} alt="detail" /> 
            
            <figcaption className = "detail__caption">{mission} {year}</figcaption>

        </figure>
        
        <section className = "detail__main main">

            <h1 className = "main__site">{site}</h1>
            <h3 className = "main__id">`MISSION RESULT: {success}`</h3>
            <h4 className = "main__date">{date}</h4>
    
            <p className="main__details">{details}</p>
    
            <section className = "main__media media">

                <ul className = "main__gallery">GALERÍA</ul>
                
                {
                    image.forEach(img => {
                        const galleryItem = document.createElement('li')
                        galleryItem.classList.add('image-gallery')
                        this.documentGetElementsByClassName('main__gallery')[0].append(img)
                    })
                }
              
                
                <figure className = "main__video">
                    <video src= {video}></video>
                </figure>
        
            </section>

        </section>
        
        <section className = "detail__footer footer">

            <span className="footer__fav">💔</span>
            <div className = "footer__button-container">

                <button type = "button" className = "footer__button" href="#">Back</button>
        
            </div>
        
        </section>
    
    </div>
    
    <a className="detail__back" href="" onClick={event => {
            event.preventDefault()

            onBack()
    }}>Go back</a>
</section>
}