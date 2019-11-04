describe ('Hooray.prototype.map', function () {
    it('should apply expression on every hooray item and save it on a new hooray', function () {
        var hooray = new Hooray (2,4,6);
        var expression = function (item) { return item << 2; }
        var result = hooray.map(expression);

        expect (hooray).not.toBe(result);
        
        var expected = new Hooray (8,16,24);
        expect(result).toEqual(expected);
    })

    it('should throw a TypeError when parameter is not a function', function () {

        var hooray = new Hooray (2,4,6);

        expect (function () { hooray.map(2)}).toThrowError(TypeError,'2 is not a function');
        expect (function () { hooray.map("a")}).toThrowError(TypeError,'a is not a function');
        expect (function () { hooray.map()}).toThrowError(TypeError,'undefined is not a function');
    })
})