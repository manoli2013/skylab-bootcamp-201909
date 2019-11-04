describe('Hooray.prototype.concat', function() {

    it('Should concat an array', function() {
        var initialHooray = new Hooray(1, 2);
        var arrayToConcat = ['a', 1];
        expect(initialHooray.concat(arrayToConcat)).toEqual([1, 2, 'a', 1]);
    });

    it('Should concat an only element', function() {
        var initialHooray = new Hooray(1, 2);
        var elementToConcat = 'a';
        expect(initialHooray.concat(elementToConcat)).toEqual([1, 2, "a"]);
    });

    it('Initial array shouldnt be diferent after the function', function() {
        var initialHooray = new Hooray(1, 2);
        initialHooray.concat(2);
        var expectedInitialHooray = new Hooray(1, 2);

        expect(initialHooray).toEqual(expectedInitialHooray);
    });

    it('arrayToConcat shouldnt be diferent after the function', function() {
        var initialHooray = new Hooray(1, 2);
        var arrayToConcat = ['a', 1];
        initialHooray.concat(arrayToConcat);
        expect(arrayToConcat).toEqual(arrayToConcat);
    });

});