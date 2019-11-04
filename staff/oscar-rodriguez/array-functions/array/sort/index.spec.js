describe("sort", function () {

    it ("should sort ascending the array, when no sorting function is sent", function () {

        var array = [3,4,5,1,9,6];
        var test = [1,3,4,5,6,9];

        sort(array);
        expect(array).toEqual(test);

    })

    it ("should sort the array, using a sort function sent as parameter", function () {

        var expression = function (a,b) { return a < b ? 1 : -1 };
        var array = [3,4,5,1,9,6];
        var test = [9,6,5,4,3,1];

        sort(array,expression);
        expect(array).toEqual(test);

    })

    it('should throw a TypeError when parameter is not a function', function () {

        var array = [2,4,6];

        expect (function () { sort(array,2)}).toThrowError(TypeError,'2 is not a function');
        expect (function () { sort(array,"a")}).toThrowError(TypeError,'a is not a function');
    })
})
