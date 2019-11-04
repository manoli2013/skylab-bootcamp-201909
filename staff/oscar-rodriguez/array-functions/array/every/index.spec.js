describe ('every', function () {

    it ('should return true when all items acomplish an expression',function () {

        var array = [1,2,3,4];

        var expresion = function (item) { return typeof item === 'number' };

        expect(every(array,expresion)).toBe(true);

    });

    it ("should return false when any item don't acomplish an expression",function () {

        var array = [1,2,"a",4];
        var expresion = function (item) { return typeof item === 'number' };

        expect(every(array,expresion)).toBe(false);

    });

    it ("shouldn't modify the original Hooray",function () {

        var array = [1,2,"a",4];
        var array_copy = [1,2,"a",4];
        var expresion = function (item) { return typeof item === 'number' };

        every(array,expresion);
        expect (array.length).toBe(array_copy.length);

        expect(array).toEqual(array_copy);

    });

    it('should fail on non-function expression', function () {
        var array = [1, 2, 3];

        expect(function () { every(array,undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { every(array,true); }).toThrowError(TypeError, 'true is not a function');
        expect(function() { every(array,1); }).toThrowError(TypeError, '1 is not a function');
    });
})