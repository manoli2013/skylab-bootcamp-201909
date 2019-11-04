function Detail(container) {
    this.__container__ = container;
}

Detail.prototype.onBack = undefined;

Detail.prototype.render = function (item) {
    var title = this.__container__.getElementsByClassName('detail__title')[0];
    title.innerText = item.title;

    var image = this.__container__.getElementsByClassName('detail__image')[0];
    image.src = item.imageUrl;

    var description = this.__container__.getElementsByClassName('detail__description')[0];
    description.innerText = item.description;

    var store = this.__container__.getElementsByClassName('detail__store')[0];
    store.href = item.link;

    var price = this.__container__.getElementsByClassName('detail__price')[0];
    price.innerText = item.price;

    var back = this.__container__.getElementsByClassName('detail__back')[0];
    back.addEventListener('click', this.onBack);
};