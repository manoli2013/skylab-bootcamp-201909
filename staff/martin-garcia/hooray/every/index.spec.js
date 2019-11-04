describe('Hooray.prototype.every', function() {
    it('Should return true', function() {
        fn = function(currentValue) { return currentValue < 40; };
        var h = new Hooray(1, 30, 39, 29, 10, 13);
        expect(h.every(fn)).toBeTruthy();
    });

    it('Hooray should be the same after the method', function() {
        var h = new Hooray(1, 2, 3);
        var expectedHooray = new Hooray(1, 2, 3);
        fn = function(currentValue) { return currentValue < 40; };
        h.every(fn)
        expect(h).toEqual(expectedHooray);
    });

    it('Should return false', function() {
        fn = function(currentValue) { return currentValue > 40; };
        var h = new Hooray(1, 30, 39, 29, 10, 13);
        expect(h.every(fn)).toBeFalsy();
    });



    it('Should throws an erro fn array is not an Function', function() {
        fn = 'pepito';
        var h = new Hooray(1, 2, 3);
        expect(function() { h.every(fn) }).toThrowError(TypeError, fn + ' is not a Function');
    });


});