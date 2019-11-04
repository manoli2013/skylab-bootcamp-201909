describe('every', function () {

    it('should print true if all elements meet the condition', function () {
        var numbers = [20, 21, 10, 5];
        var greaterOne = function (item) {  return item > 1; };

        expect(every(numbers, greaterOne)).toBe(true);
    });

    it('should print false if any element does not fulfill the condition', function () {
        var numbers = [20, 21, 10, 5];
        var lessOne = function (item) {  return item < 1; };

        expect(every(numbers, lessOne)).toBe(false);
    });

    it('should fail on non-function expression', function () {
        var numbers = [20, 21, 10, 5];

        expect(function () { every(numbers, undefined); }).toThrowError(TypeError, 'undefined is not a function');
        // expect(function() { every(numbers, true); }).toThrowError(TypeError, 'true is not a function');
        // expect(function() { every(numbers,1); }).toThrowError(TypeError, '1 is not a function');
    });

    it('should fail on non-array', function () {
        
        var numbers; //[20, 21, 10, 5];
        var lessOne = function (item) {  return item < 1; };

        expect(function () { every(numbers, lessOne); }).toThrowError(TypeError, 'undefined is not an array');
        expect(function() { every(true, lessOne); }).toThrowError(TypeError, 'true is not an array');
        expect(function() { every(1, lessOne); }).toThrowError(TypeError, '1 is not an array');
    });
 });