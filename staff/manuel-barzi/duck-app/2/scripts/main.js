// presentation

listInitialRandomDucks();

function Search(container) {
    this.__container__ = container;
}

Search.prototype.onSubmit = function (expression) {
    this.__container__.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        expression(query);
    });
};

var search = new Search(document.getElementsByClassName('search')[0]);
search.onSubmit(listSearchResults);


function listInitialRandomDucks() {
    searchDucks('', function (ducks) {
        ducks = ducks.shuffle().splice(0, 3);

        paintResults(ducks);
    });
}

function listSearchResults(query) {
    searchDucks(query, paintResults);
}

function Results(container) {
    this.__container__ = container;
    container.innerHTML = '';
}

Results.prototype.render = function (ducks) {
    this.__container__.innerHTML = '';

    ducks.forEach(function (duck) {
        var result = new ResultItem(document.createElement('li'));
        result.render(duck);

        this.__container__.append(result.__container__);
    }.bind(this));
};

function ResultItem(container) {
    this.__container__ = container;
    container.classList.add('results__item');
}

ResultItem.prototype.render = function (duck) {
    var item = document.createElement('a');
    item.classList.add('item');

    item.addEventListener('click', function (event) {
        var id = duck.id;

        retrieveDuck(id, paintDetail);
    });

    var title = document.createElement('h2');
    title.classList.add('item__title');
    title.innerText = duck.title;

    var image = document.createElement('img');
    image.classList.add('item__image');
    image.src = duck.imageUrl;

    var price = document.createElement('span');
    price.classList.add('item__price');
    price.innerText = duck.price;

    item.append(title, image, price);

    this.__container__.append(item);
};

var results = new Results(document.getElementsByClassName('results')[0]);

function paintResults(ducks) {
    results.render(ducks);
}

function Detail(container) {
    this.__container__ = container;
}

Detail.prototype.render = function (duck) {
    var title = this.__container__.getElementsByClassName('detail__title')[0];
    title.innerText = duck.title;

    var image = this.__container__.getElementsByClassName('detail__image')[0];
    image.src = duck.imageUrl;

    var description = this.__container__.getElementsByClassName('detail__description')[0];
    description.innerText = duck.description;

    var store = this.__container__.getElementsByClassName('detail__store')[0];
    store.href = duck.link;

    var price = this.__container__.getElementsByClassName('detail__price')[0];
    price.innerText = duck.price;

    var back = this.__container__.getElementsByClassName('detail__back')[0];
    back.addEventListener('click', function (event) {
        var views = document.getElementsByClassName('view');

        views[0].classList.remove('hide');
        views[1].classList.add('hide');
    });
};

function paintDetail(duck) {
    var detail = new Detail(document.getElementsByClassName('detail')[0]);
    detail.render(duck);

    var views = document.getElementsByClassName('view');

    views[0].classList.add('hide');
    views[1].classList.remove('hide');
}