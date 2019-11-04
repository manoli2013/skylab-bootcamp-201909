function Results(container) {
    Component.call(this, container);

    container.innerHTML = '';

    this.render = this.render.bind(this); // EYE!
}

Results.extend(Component);

Results.prototype.onItemRender = undefined;

Results.prototype.render = function (results) {
    this.container.innerHTML = '';

    results.forEach(function (result) {
        var item = this.onItemRender();

        item.render(result);

        this.add(item);
    }.bind(this));
};