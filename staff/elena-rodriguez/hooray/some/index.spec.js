describe ("Hooray.prototype.some", function () {

    it("should return true if find some items that accomplish the expression provided", function () {

        var hooray = new Hooray (1,2,3,4,5);
        var expression = function (item) { return item > 3 };

        expect(hooray.some(expression)).toBe(true);
    })

    it("should return false if not find any items that accomplish the expression provided", function () {

        var hooray = new Hooray (1,2,3,4,5);
        var expression = function (item) { return item > 13 };

        expect(hooray.some(expression)).toBe(false);
    })

    it ("shouldn't modify the original hooray", function () {

        var hooray = new Hooray (1,2,3,4);
        var test = new Hooray (1,2,3,4);

        var expression = function (item) { return item > 3 };

        hooray.some(expression);

        expect(hooray).toEqual(test);
        expect(hooray.length).toEqual(test.length);
    })

    it('should throw a TypeError when parameter is not a function', function () {

        var hooray = new Hooray (2,4,6);

        expect (function () { hooray.some(2)}).toThrowError(TypeError,'2 is not a function');
        expect (function () { hooray.some("a")}).toThrowError(TypeError,'a is not a function');
        expect (function () { hooray.some()}).toThrowError(TypeError,'undefined is not a function');
    })

})