describe('reduce()', function() {
    it('shoud return a correct value', function() {
        var h = new Hooray(1, 2, 3);
        var fn = function(a, b) { return a + b };
        expect(h.reduce(fn)).toBe(6);
    });

    it('should throws an error: reduce of empty array with no initial value ', function() {
        var h = new Hooray();
        var fn = function(a, b) { return a + b };
        expect(function() { h.reduce(fn) }).toThrowError(TypeError, 'reduce of empty array with no initial value');
    });


    it('should throws an error if expression is not an Function ', function() {
        var h = new Hooray(1, 2, 3);
        var fn = 'pepito';
        expect(function() { h.reduce(fn) }).toThrowError(TypeError, fn + ' is not a Function');
    });
});