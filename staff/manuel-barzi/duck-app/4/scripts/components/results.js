function Results(container) {
    this.__container__ = container;
    container.innerHTML = '';

    this.render = this.render.bind(this); // EYE!
}

Results.prototype.onItemRender = undefined;

Results.prototype.render = function (results) {
    this.__container__.innerHTML = '';

    results.forEach(function (result) {
        var item = this.onItemRender();

        item.render(result);

        this.__container__.append(item.__container__);
    }.bind(this));
};