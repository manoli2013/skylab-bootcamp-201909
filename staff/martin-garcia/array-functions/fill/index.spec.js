describe('fill', function() {
    it('Should fill entire array without value(undefined)', function() {
        var array = [1, 2, 3, 4];
        expect(fill(array)).toEqual([undefined, undefined, undefined, undefined]);
    });

    it('Should fill entire array with value', function() {
        var array = [1, 2, 3, 4];
        var value = '2';
        expect(fill(array, value)).toEqual(['2', '2', '2', '2']);
    });

    it('Should fill the array with start position', function() {
        var array = [1, 2, 3, 4];
        var value = '2';
        var start = 1;
        expect(fill(array, value, start)).toEqual([1, '2', '2', '2']);
    });

    it('Should fill the array with start and end position', function() {
        var array = [1, 2, 3, 4];
        var value = '2';
        var start = 1;
        var end = 2;
        expect(fill(array, value, 1, end)).toEqual([1, '2', 3, 4]);
    });

    it('Should throws an error if array is not an array', function() {
        var array = 'pepito';
        expect(function() { fill(array) }).toThrowError(TypeError, array + ' is not an Array');
    });

    it('Should throws an error if start is not a Number or undefined', function() {
        var array = [1, 2, 3, 4];
        var value = '2';
        var start = '1';
        expect(function() { fill(array, value, start) }).toThrowError(TypeError, "expected expression, got ,");
    });

    it('Should throws an error if end is not a Number or undefined', function() {
        var array = [1, 2, 3, 4];
        var value = '2';
        var start = 1;
        var end = '2';
        expect(function() { fill(array, value, start, end) }).toThrowError(TypeError, "expected expression, got ,");
    });
});