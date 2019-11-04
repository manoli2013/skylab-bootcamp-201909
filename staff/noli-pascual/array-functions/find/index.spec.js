describe('find', function () {
    it('should return the first item of an array that accomplishes the condition provided in a function', function () {
        var array = [10, 30, 50, 60];
        var expression = function(item) {
            return item > 20;
        };
        var result = find(array, expression);

        expect(result).toBe(30);
        expect(array.length).toBe(4);
    });

    it('should return undefined if no item accomplished the condition provided by the function', function() {

        var array = [10, 30, 50, 60];
        var expression = function(item) {
            return item > 70;
        };
        var result = find(array, expression);

        expect(result).toBe(undefined);

    })

    it('should fail on first parameter not an array', function () {

        expect(function () { find(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { find(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { find(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { find('Hello'); }).toThrowError(TypeError, 'Hello is not an array');
    });


    it('should fail on second parameter not a function', function () {

        var array = [10, 30, 50, 60];

        expect(function () { find(array); }).toThrowError(TypeError, 'undefined is not a function');

    });
    
});