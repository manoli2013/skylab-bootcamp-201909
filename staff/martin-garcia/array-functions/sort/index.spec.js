describe('sort()', function() {
    it('should order from high to low', function() {
        var array = [1, 2, 3];
        var fn = function(a, b) { return a - b };
        var expectedArray = [3, 2, 1];
        expect(sort(array, fn)).toEqual(expectedArray);

    });

    it('Elements should be the same in a diferent order', function() {
        var array = [3, 1, 2];
        var initialArray = [1, 2, 3];
        var fn = function(a, b) { return a - b };
        expect((sort(array, fn)).length).toEqual(array.length);
        for (var a = 0; a < array.length; a++) {
            expect(initialArray.includes(array[a])).toBeTruthy();
        }

    });


    it('should order from low to high', function() {
        var array = [1, 2, 3];
        var fn = function(a, b) { return a + b };
        var expectedArray = [1, 2, 3];
        expect(sort(array, fn)).toEqual(expectedArray);

    });


    it('Should throw an error if expresion is not instance of Function', function() {
        var array = [1, 2, 3];
        var expression = 'pepito';

        expect(function() { sort(array, expression); }).toThrowError(TypeError, expression + ' is not a Function');
    });

    it('Should throw an error if array is not instance of array', function() {
        var array;
        var expression = function(a) { console.log(a); };

        expect(function() { sort(array, expression); }).toThrowError(TypeError, array + ' is not an Array');
    });
});