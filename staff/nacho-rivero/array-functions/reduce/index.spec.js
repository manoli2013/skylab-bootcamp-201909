describe ('reduce', function () {

    it ("shouldn't modify the original array", function () {

        var array = [1,2,3,4];
        var test = [1,2,3,4];

        var expression = function (accum, item) { return accum+item};

        var result = reduce(array, expression);

        expect(array).toEqual(test);
        expect(array.length).toEqual(test.length);
    })

    it('should throw a TypeError when parameter is not a function', function () {

        var array = [1,2,3,4];
       
        expect(function () { forEach(array, undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { forEach(array, true); }).toThrowError('true is not a function');
        expect(function() { forEach(array, 1); }).toThrowError('1 is not a function');
    })
})