module.exports = function({ item: { id, title, image, description, price, link, isFav }, back, favPath}) {

    return `<section className="view detail">
        <h2 className="detail__title">${title}</h2>
        <img className="detail__image" src=${image} />
        <p className="detail__description">${description}</p>
        <a className="detail__store" href=${link}>Go to store</a>
        <span className="detail__price">${price}</span>
        
        <span className="detail__fav">
            
            <form method = "post" action = "${favPath}">
                <input type="hidden" name="id" value="${id}">
                <button type = "submit"> ${isFav ? '🧡' : '💔'}
                </button>
            </form>
            <form method="post" action="${back}"><button class="detail-list__button">Go Back</button></form>
            <span >
        </span>
    </section> `
}


