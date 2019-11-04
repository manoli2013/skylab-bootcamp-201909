describe('forEach()', function() {
    it("Should work correctly, for each element in the array add 1", function() {
        var array = [1, 2, 3];
        var acum = 0;
        var fn = function(n) { acum += n };
        forEach(array, fn);
        expect(acum).toBe(6);
    });

    it('Should throw an error if expresion is not instance of Function', function() {
        var array = [1, 2, 3];
        var expression = 'pepito';

        expect(function() { forEach(array, expression); }).toThrowError(TypeError, 'Error: missing argument 0 when calling function forEach');
    });

    it('Should throw an error if array is not instance of array', function() {
        var array;
        var expression = function(a) { console.log(a); };

        expect(function() { forEach(array, expression); }).toThrowError(TypeError, array + ' is not an Array');
    });
});