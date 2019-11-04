describe('Hooray.prototype.findIndex', function () {
    it('should return index of the first element that accomplish the expression', function () {
        var numbers = new Hooray(1, 2, 3);
        var biggerThanOne = function (element) {return element > 1};
        expect(numbers.findIndex(biggerThanOne)).toBe(1);
    });

    
    it('should return -1 when there is no element that accomplish the expression', function () {
        var numbers = new Hooray(1, 2, 3);
        var biggerThanFive = function (element) {return element > 5};
        expect(numbers.findIndex(biggerThanFive)).toBe(-1);
    });


    it('should return an errror if the function is not a function' , function () {
        var numbers = new Hooray(1, 2, 3);
        var multiply = 'hola';

        expect(function() {numbers.findIndex(multiply)}).toThrowError(multiply + " is not a function");

    });

});