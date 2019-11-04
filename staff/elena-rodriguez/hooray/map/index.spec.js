describe('Hooray.prototype.map', function () {

    it('should add 6 to all numbers and returning a new hooray with the results', function () {
        var numbers = new Hooray(1, 2, 3);
        var result = new Hooray();
        
            var add = function (number) { return number + 6;};

        result = numbers.map(add);
        var test = new Hooray(7, 8, 9);

        expect(result).toEqual(test);
        expect(add).toBeInstanceOf(Function);
        // expect(result.length).toBe(expected.length);
    });


    it('should fail on non-function expression', function () {
        var numbers = new Hooray(1, 2, 3);
        var result = new Hooray();
        
            var add = function (number) { 
                
               return number + 2;
            };
        
        // expect(!(add).toBeInstanceOf(Function));

        expect(function () { numbers.map(); }).toThrowError('undefined is not a function');
        expect(function() { numbers.map(true); }).toThrowError('true is not a function');
        expect(function() { numbers.map(1); }).toThrowError('1 is not a function');
    });
});