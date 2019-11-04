describe('Hooray.prototype.some', function() {
    it('Should return true', function() {
        var h = new Hooray(1, 2, 3);
        var fn = function(number) { return number < 2 };
        expect(h.some(fn)).toBeTruthy();
    });


    it('Should return false', function() {
        var h = new Hooray(1, 2, 3);
        var fn = function(number) { return number < 0 };
        expect(h.some(fn)).toBeFalsy();
    });

    it('Hooray should be the same after the method', function() {
        var h = new Hooray(1, 2, 3);
        var expectedHooray = new Hooray(1, 2, 3);
        var fn = function(number) { return number < 0 };
        h.some(fn)
        expect(h).toEqual(expectedHooray);
    });

    it('Should throws an error if fn is not a Function', function() {
        var h = new Hooray(1, 2, 3);
        var fn = 'pepito';
        expect(function() { h.some(fn) }).toThrowError(TypeError, fn + ' is not a Function');
    });
});