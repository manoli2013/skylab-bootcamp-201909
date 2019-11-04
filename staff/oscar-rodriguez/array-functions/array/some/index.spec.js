describe ("some", function () {

    it("should return true if find some items that accomplish the expression provided", function () {

        var array = [1,2,3,4,5];
        var expression = function (item) { return item > 3 };

        expect(some(array,expression)).toBe(true);
    })

    it("should return false if not find any items that accomplish the expression provided", function () {

        var array = [1,2,3,4,5];
        var expression = function (item) { return item > 13 };

        expect(some(array,expression)).toBe(false);
    })

    it ("shouldn't modify the original array", function () {

        var array = [1,2,3,4];
        var test = [1,2,3,4];

        var expression = function (item) { return item > 3 };

        some(array,expression);

        expect(array).toEqual(test);
        expect(array.length).toEqual(test.length);
    })

    it('should throw a TypeError when parameter is not a function', function () {

        var array = [2,4,6];

        expect (function () { some(array,2)}).toThrowError(TypeError,'2 is not a function');
        expect (function () { some(array,"a")}).toThrowError(TypeError,'a is not a function');
        expect (function () { some(array,)}).toThrowError(TypeError,'undefined is not a function');
    })

})