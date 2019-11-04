describe('some()', function() {
    it('Should return true', function() {
        var a = [1, 2, 3];
        var fn = function(number) { return number < 2 };
        expect(some(a, fn)).toBeTruthy();
    });

    it('Should return false', function() {
        var a = [1, 2, 3];
        var fn = function(number) { return number < 0 };
        expect(some(a, fn)).toBeFalsy();
    });

    it('Should throws an error if array is not an Array', function() {
        var a = 33;
        var fn = function(number) { return number < 0 };
        expect(function() { some(a, fn) }).toThrowError(TypeError, a + ' is not an Array');
    });

    it('array should be the same after the method', function() {
        var a = [1, 2, 3];
        var expectedArray = [1, 2, 3];
        var fn = function(number) { return number < 0 };
        some(a, fn);
        expect(a).toEqual(expectedArray);
    });

    it('Should throws an error if fn is not a Function', function() {
        var a = [3, 3];
        var fn = 'pepito';
        expect(function() { some(a, fn) }).toThrowError(TypeError, fn + ' is not a Function');
    });


});