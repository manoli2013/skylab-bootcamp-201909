function ResultItem(container) {
    Component.call(this, container);
    
    container.classList.add('results__item');
}

ResultItem.extend(Component);

ResultItem.prototype.onClick = undefined;

ResultItem.prototype.render = function (result) {
    var item = document.createElement('a');
    item.classList.add('item');

    item.addEventListener('click', function () {
        var id = result.id;

        this.onClick(id);
    }.bind(this));

    var title = document.createElement('h2');
    title.classList.add('item__title');
    title.innerText = result.title;

    var image = document.createElement('img');
    image.classList.add('item__image');
    image.src = result.imageUrl;

    var price = document.createElement('span');
    price.classList.add('item__price');
    price.innerText = result.price;

    item.append(title, image, price);

    this.container.append(item);
};