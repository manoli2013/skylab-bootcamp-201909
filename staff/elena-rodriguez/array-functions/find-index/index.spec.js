describe('find-index', function () {
    it('should return index of the first element that accomplish the expression', function () {
        var numbers = [1,2,3];
        var biggerThanOne = function (element) {return element > 1};
        expect(findIndex(numbers,biggerThanOne)).toBe(1);
    });

    
    it('should return -∫ when there is no element that accomplish the expression', function () {
        var numbers = [1,2,3] ;
        var biggerThanFive = function (element) {return element > 5};
        expect(findIndex(numbers,biggerThanFive)).toBe(-1);
    });


    it('should return an errror if the function is not a function' , function () {
        var numbers = [1,2,3]
        var multiply = 'hola';

        expect(function() { findIndex(numbers, multiply) }).toThrowError(multiply + " is not a function");

    });

});