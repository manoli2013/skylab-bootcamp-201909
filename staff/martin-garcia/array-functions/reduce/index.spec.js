describe('reduce()', function() {
    it('shoud return a correct value', function() {
        var array = [1, 2, 3];
        var fn = function(a, b) { return a + b };
        expect(reduce(array, fn)).toBe(6);
    });

    it('should throws an error: reduce of empty array with no initial value ', function() {
        var array = [];
        var fn = function(a, b) { return a + b };
        expect(function() { reduce(array, fn) }).toThrowError(TypeError, 'reduce of empty array with no initial value');
    });

    it('should throws an error if array is not an Array ', function() {
        var array = 'pepito';
        var fn = function(a, b) { return a + b };
        expect(function() { reduce(array, fn) }).toThrowError(TypeError, array + ' is not an Array');
    });

    it('should throws an error if fn is not a Function ', function() {
        var array = [1, 2, 3];
        var fn = 'pepito';
        expect(function() { reduce(array, fn) }).toThrowError(TypeError, fn + ' is not a Function');
    });
});