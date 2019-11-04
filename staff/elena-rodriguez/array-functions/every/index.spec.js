describe('every', function () {
    it('should return true if all the elements pass the condition', function () {
        var numbers = [2,3,4,5];
        var biggerThanOne = function (element) {return element > 1};
        var result = every(numbers,biggerThanOne);
        expect(result).toBe(true);
    });

    it('should return false if there is an element that does not pass the condition', function () {
        var numbers = [1,2,3] ;
        var biggerThanTwo = function (element) {return element > 2};
        var result = every(numbers,biggerThanTwo);
        expect(result).toBe(false);
    });


    it('should return an error if the expression is not a function' , function () {
        var numbers = [1,2,3];
        var smallerThanSix = 'I should check something...but I dont';
        expect(function() { every(numbers, smallerThanSix) }).toThrowError(smallerThanSix + " is not a function");

    });
});