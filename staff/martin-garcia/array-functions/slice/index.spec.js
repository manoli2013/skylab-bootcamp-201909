describe('slice', function() {
    it('method without parameters, should return the same array', function() {
        var array = [1, 2, 3, 4];
        expect(slice(array)).toEqual(array);

    });

    it('method with first parameter(start) parameters', function() {
        var array = [1, 2, 3, 4];
        var start = 2;
        var expectedArray = [3, 4];
        expect(slice(array, start)).toEqual(expectedArray);
    });

    it('method with both parameters(start, end) parameters', function() {
        var array = [1, 2, 3, 4];
        var start = 2;
        var end = 3;
        var expectedArray = [3];
        expect(slice(array, start, end)).toEqual(expectedArray);
    });

    it('The initial array should not change', function() {
        var array = [1, 2, 3, 4];
        var expectedInitialArray = [1, 2, 3, 4];
        var start = 2;
        var end = 3;
        slice(array, start, end);
        expect(array).toEqual(expectedInitialArray);
    });

    it('Should throw an error if array is not an Array', function() {
        var array = 'pepito';
        expect(function() { slice(array) }).toThrowError(TypeError, array + ' is not an Array');
    });

    it('Should throw an error if start parameter is not an number or undefined', function() {
        var array = [1, 2, 3, 4];
        var start = '1';
        expect(function() { slice(array, start) }).toThrowError(TypeError, "expected expression, got ,");
    });

    it('Should throw an error if end parameter is not an number or undefined', function() {
        var array = [1, 2, 3, 4];
        var start = 1;
        var end = '1';

        expect(function() { slice(array, start, end) }).toThrowError(TypeError, "expected expression, got ,");
    });
});