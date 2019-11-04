describe('find()', function() {

    it('Should returns the value of the first match', function() {
        var array = [1, 2, 3];
        var fn = function(number) { return number > 2; };
        expect(find(array, fn)).toBe(3);
    });

    it('Should returns undefined because there isnt first match', function() {
        var array = [1, 2, 3];
        var fn = function(number) { return number > 7; };
        expect(find(array, fn)).toBe(undefined);
    });

    it('If initial array is empty, should returns undefined', function() {
        var array = [];
        var fn = function(number) { return number > 7; };
        expect(find(array, fn)).toBe(undefined);
    });

    it('Should throws an error if function is not instanceOf Function', function() {
        var array = [1, 2, 3];
        var fn = 'pepito';
        expect(function() { find(array, fn) }).toThrowError(TypeError, "expression is not a function");
    });

});