describe('reduce hooray', function () {
    it('should reduce all the elements of the array to a unic value get by the apply of the expression, only numbers', function () {
        var hor =  new Hooray(1, 2, 3, 4, 5);
        var reducer = function (accumulator, currentValue) { return accumulator + currentValue; };

        var result = hor.reduce(reducer);

        expect(result).toBe(15);
    });

    it('should reduce all the elements of the array to a unic value get by the apply of the expression, combine numbers and strings', function () {
        var hor =  new Hooray('a', 2, 3, 'b', 5);
        var reducer = function (accumulator, currentValue) { return accumulator + currentValue; };

        var result = hor.reduce(reducer);

        expect(result).toBe('a23b5');
    });

    it('should reduce all the elements of the array to a unic value get by the apply of the expression, combine numbers and strings', function () {
        var hor =  new Hooray(1, 2, 'a', 4, 5);
        var reducer = function (accumulator, currentValue) { return accumulator + currentValue; };

        var result = hor.reduce(reducer);

        expect(result).toBe('3a45');
    });

    it('should reduce all the elements of the array to a unic value get by the apply of the expression, combine numbers and strings', function () {
        var hor = new Hooray('0', 2, 'a', 4, 5);
        var reducer = function (accumulator, currentValue) { return accumulator + currentValue; };

        var result = hor.reduce(reducer);

        expect(result).toBe('02a45');
    });

    it('should fail on undefined expression', function() {
        var hor = new Hooray(12, 5, 8, 130, 44);
        var expression //= function (x) { return x >= 10; };

        expect(function () { hor.reduce(expression); }).toThrowError(TypeError, 'undefined is not a function');
    });  
});

