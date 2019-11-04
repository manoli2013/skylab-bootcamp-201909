describe ('map', function () {
    it('should apply expression on every array item and save it on a new array', function () {
        var array = [2,4,6];
        var expression = function (item) { return item << 2; }
        var result = map(array,expression);

        expect (array).not.toBe(result);
        
        var expected = [8,16,24];
        expect(result).toEqual(expected);
    })


    it('should throw a TypeError when first parameter is not an array', function () {
        
        var expression = function (item) { return item << 2; }

        expect (function () { map(2,expression)}).toThrowError(TypeError,'2 is not an array');
        expect (function () { map("a",expression)}).toThrowError(TypeError,'a is not an array');
        expect (function () { map()}).toThrowError(TypeError,'undefined is not an array');

    })

    it('should throw a TypeError when parameter is not a function', function () {

        var array = [2,4,6];

        expect (function () { map(array,2)}).toThrowError(TypeError,'2 is not a function');
        expect (function () { map(array,"a")}).toThrowError(TypeError,'a is not a function');
        expect (function () { map(array,)}).toThrowError(TypeError,'undefined is not a function');
    })
})