describe ('findIndex', function () {


    it ('should return the index of the first item that acomplish the expression sent', function () {

        var array = [1,2,3,4,5,6,7,8,9,0];
        var expression = function (i) { return (i > 0)};

        expect(findIndex(array,expression)).toBe(0);
    })

    it ("should return -1 when Item's not found", function () {

        var array = [1,2,3,4,5,6,7,8,9,0];
        var expression = function (i) { return (i<0)};

        expect(findIndex(array,expression)).toBe(-1);
    })


    it ("should return -1 when am empty array calls findIndex()", function () {

        var array = [];
        var expression = function (i) { return (i<0)};

        expect(findIndex(array,expression)).toBe(-1);
    })


    it ("shouldn't modify the original array", function () {

        var array = [1,2,3,4];
        var test = [1,2,3,4];

        var expression = function (i) { return (i<0)};

        var restult = findIndex(array,expression);

        expect(array).toEqual(test);
    })

    it('should throw a TypeError when parameter is not a function', function () {

        var array = [2,4,6];

        expect (function () { findIndex(array,2)}).toThrowError(TypeError,'2 is not a function');
        expect (function () { findIndex(array,"a")}).toThrowError(TypeError,'a is not a function');
        expect (function () { findIndex(array,)}).toThrowError(TypeError,'undefined is not a function');
    })
})