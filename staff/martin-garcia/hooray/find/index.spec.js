describe('Hooray.prototype.find', function() {

    it('Should returns the value of the first match', function() {
        var initialHooray = new Hooray(1, 2, 3);
        var fn = function(number) { return number > 2; };
        expect(initialHooray.find(fn)).toBe(3);
    });

    it('Should returns undefined because there isnt first match', function() {
        var initialHooray = new Hooray(1, 2, 3);
        var fn = function(number) { return number > 7; };
        expect(initialHooray.find(fn)).toBe(undefined);
    });

    it('Hooray should be the same after the method', function() {
        var h = new Hooray(1, 2, 3);
        var expectedHooray = new Hooray(1, 2, 3);
        var fn = function(number) { return number > 7; };
        h.find(fn)
        expect(h).toEqual(expectedHooray);
    });

    it('If initial array is empty, should returns undefined', function() {
        var initialHooray = new Hooray();
        var fn = function(number) { return number > 7; };
        expect(initialHooray.find(fn)).toBe(undefined);
    });

    it('Should throws an error if function is not instanceOf Function', function() {
        var initialHooray = new Hooray(1, 2, 3);
        var fn = 'pepito';
        expect(function() { initialHooray.find(fn) }).toThrowError(TypeError, "expression is not a function");
    });

});