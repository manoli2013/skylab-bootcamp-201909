(function () {
    searchDucks('', function (ducks) {
        ducks = ducks.shuffle().splice(0, 3);

        results.render(ducks);
    });
})();

var search = new Search(document.getElementsByClassName('search')[0]);
search.onSubmit(function (query) {
    searchDucks(query, results.render); // NOTE it works thanks to the internal binding that takes place in Results constructor (SEE file)
    // searchDucks(query, results.render.bind(results)); // NOTE alternative to previous
    // searchDucks(query, function(ducks) { // NOTE alternative to previous
    //     results.render(ducks);
    // });
});

var results = new Results(document.getElementsByClassName('results')[0]);
results.onItemRender = function () {
    var item = new ResultItem(document.createElement('li'));

    item.onClick = function (id) {
        retrieveDuck(id, function (duck) {
            var detail = new Detail(document.getElementsByClassName('detail')[0]);

            detail.onBack = function () {
                var views = document.getElementsByClassName('view');

                views[0].classList.remove('hide');
                views[1].classList.add('hide');
            };

            detail.render(duck);

            var views = document.getElementsByClassName('view');

            views[0].classList.add('hide');
            views[1].classList.remove('hide');
        });
    };

    return item;
};