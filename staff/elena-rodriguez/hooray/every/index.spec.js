describe('Hooray.prototype.every', function () {
    it('should return true if all elements pass the condition', function () {
        var numbers = new Hooray(2, 3, 4, 5);
        
        var biggerThanOne = function (num) {  return num > 1; };

        expect(numbers.every(biggerThanOne)).toBe(true);

    });

    it('should return false as soon as one element does not pass the condition', function () {
        var numbers = new Hooray(2, 3, 4, 5);
        
        var smallerThanOne = function (num) {  return num < 1; };

        expect(numbers.every(smallerThanOne)).toBe(false);
    });

    it('should give an error if the expression is not a function', function () {
        var numbers = new Hooray(2, 3, 4, 5);

        expect(function() { numbers.every(undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { numbers.every(true); }).toThrowError(TypeError, 'true is not a function');
        expect(function() { numbers.every(18); }).toThrowError(TypeError, '18 is not a function');
    });

});