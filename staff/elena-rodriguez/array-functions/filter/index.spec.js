describe('filter', function () {
    it('should return a new array, with the items that pass the condition', function () {
        var numbers = [1, 2, 3];
        var biggerThanTwo = function (number) {return number > 2;};

        expect(filter(numbers,biggerThanTwo)).toEqual([3]);
    });

    
    it('should return empty array if no elements pass the condition', function () {
        var numbers = [1, 2, 3];
        var biggerThanFour = function (number) {return number > 4;};

        expect(filter(numbers,biggerThanFour)).toEqual([]);
    });

    it('should return empty array if first array is empty', function () {
        var numbers = [];
        var biggerThanFour = function (number) {return number > 4;};

        expect(filter(numbers,biggerThanFour)).toEqual([]);
    });

    it('should return an error if the condition is not a function' , function () {
        var numbers = [1,2,3];
        var smallerThanSix = 'im not a function!';

        expect(function() { filter(numbers, smallerThanSix) }).toThrowError(smallerThanSix + " is not a function");

    });

    it('should return an error if the array is not an array ', function () {
        var numbers = 3;
        var smallerThanSix = function(number) {return number < 6;};
        expect(function () { filter(numbers, smallerThanSix) }).toThrowError(numbers + " is not an array");

    });
});
