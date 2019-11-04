// needs to be modified!!!

describe('Hooray.prototype.filter', function () {
    it('should return a new hooray, with the items that pass the condition', function () {
        var numbers = new Hooray(1,2,3,4,5);
        var biggerThanTwo = function (number) {return number > 2;};
        var result = numbers.filter(biggerThanTwo);

        var test = new Hooray (3,4,5);
        expect(result).toEqual(test);
    });

    
    it('should return empty hooray if no elements pass the condition', function () {
        var numbers = new Hooray (1,2,3);
        var biggerThanFour = function (number) {return number > 4;};
        var result = numbers.filter(biggerThanFour);

        var test = new Hooray ();
        expect(result).toEqual(test);
    });

    
    it('should return empty hooray if first hooray is empty', function () {
        var numbers = new Hooray ();
        var biggerThanFour = function (number) {return number > 4;};
        var result = numbers.filter(biggerThanFour);

        var test = new Hooray ();

        expect(result).toEqual(test);
    });
    

    it('should return an error if the condition is not a function' , function () {
        var numbers = new Hooray (1,2,3);
        var smallerThanSix = 'im not a function!';
        expect(function(){numbers.filter(smallerThanSix)}).toThrowError(smallerThanSix + ' is not a function');

    });
    

});