describe('findIndex', function () {
    it('should create a index applying the expression', function () {
        var array = [1,2,3,4,5,6,7,8];
        var expression = function(currentValue) { return currentValue > 5; }
        var result= findIndex(array, expression);


        expect(result).not.toBe(array);
        expect(result).not.toBeInstanceOf(Array);
        expect(array.length).toBe(8);
        expect(result).toBe(5);

    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];
        var expression = console.log;

        expect(function() { findIndex(array, expression); }).toThrowError(TypeError, 'undefined is not an array');
    });

    it('should fail on undefined expression', function () {
        var array = [1, 2, 3];
        var expression; // = console.log;

        expect(function() { findIndex(array, expression); }).toThrowError(TypeError, 'undefined is not a function');
    });

    it('should fail on non-function expression', function () {
        var array = [1, 2, 3];

        //throw Error('hola mundo');

        expect(function () { findIndex(array, undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { findIndex(array, true); }).toThrowError(TypeError, 'true is not a function');
        expect(function() { findIndex(array, 1); }).toThrowError(TypeError, '1 is not a function');
    });
});

