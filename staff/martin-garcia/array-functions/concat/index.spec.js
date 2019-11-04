describe('concat()', function() {

    it('Should concat an array', function() {
        var initialArray = [1, 2];
        var arrayToConcat = ['a', 1];
        expect(concat(initialArray, arrayToConcat)).toEqual([1, 2, "a", 1]);
    });

    it('Should concat an only element', function() {
        var initialArray = [1, 2];
        var arrayToConcat = 'a';
        expect(concat(initialArray, arrayToConcat)).toEqual([1, 2, "a"]);
    });

    it('Initial array shouldnt be diferent after the function', function() {
        var initialArray = [1, 2];
        concat(initialArray, 2);
        expect(initialArray).toEqual([1, 2]);
    });

    it('arrayToConcat shouldnt be diferent after the function', function() {
        var initialArray = [1, 2];
        var arrayToConcat = ['a', 1];
        concat(initialArray, arrayToConcat);
        expect(arrayToConcat).toEqual(arrayToConcat);
    });

});