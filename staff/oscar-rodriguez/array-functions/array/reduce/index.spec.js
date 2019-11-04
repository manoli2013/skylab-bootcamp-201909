describe ('reduce', function () {

    it ('should return the index of the first item that acomplish the expression sent', function () {

        var array = [1,2,3,4,5];
        var expression = function (accum, item) { return accum+item};

        expect(reduce(array,expression)).toBe(15);
    })

    it ("shouldn't modify the original array", function () {

        var array = [1,2,3,4];
        var test = [1,2,3,4];

        var expression = function (accum, item) { return accum+item};

        var restult = reduce(array,expression);

        expect(array).toEqual(test);
        expect(array.length).toEqual(test.length);
    })

    it ("should throw a TypeError when an empty array calls reduce()", function () {

        var array = [];
        var expression = function (accum, item) { return accum+item};

        expect(function () { reduce(array,expression)}).toThrowError(TypeError,"Reduce of empty array with no initial value at Array.reduce");
    })


    it('should throw a TypeError when parameter is not a function', function () {

        var array = [2,4,6];

        expect (function () { reduce(array,2)}).toThrowError(TypeError,'2 is not a function');
        expect (function () { reduce(array,"a")}).toThrowError(TypeError,'a is not a function');
        expect (function () { reduce(array,)}).toThrowError(TypeError,'undefined is not a function');
    })
})
