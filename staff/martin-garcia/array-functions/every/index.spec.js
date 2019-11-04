describe('every()', function() {
    it('Should return true', function() {
        fn = function(currentValue) { return currentValue < 40; };
        var array1 = [1, 30, 39, 29, 10, 13];
        expect(every(array1, fn)).toBeTruthy();
    });

    it('Should return false', function() {
        fn = function(currentValue) { return currentValue > 40; };
        var array1 = [1, 30, 39, 29, 10, 13];
        expect(every(array1, fn)).toBeFalsy();
    });

    it('array should be the same after the method', function() {
        var a = [1, 2, 3];
        var expectedArray = [1, 2, 3];
        var fn = function(number) { return number < 0 };
        every(a, fn)
        expect(a).toEqual(expectedArray);
    });


    it('Should throws an erro if array is not an Array', function() {
        fn = function(currentValue) { return currentValue > 40; };
        var array1 = 'a';
        expect(function() { every(array1, fn) }).toThrowError(array1 + ' is not an Array');
    });

    it('Should throws an erro fn array is not an Function', function() {
        fn = 'pepito';
        var array1 = [1, 2, 3];
        expect(function() { every(array1, fn) }).toThrowError(TypeError, fn + ' is not a Function');
    });


});