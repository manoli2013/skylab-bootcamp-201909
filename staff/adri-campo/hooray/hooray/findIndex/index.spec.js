describe('Hooray.prototype.findIndex', function () {

    it('should return the index number of the first item that returns true to the condition', function () {
        function checkCondition(item) {
            return item > 5
        };
        
        var numbers = new Hooray (1, 4, 5, 53, 23, 37);
        var result = numbers.findIndex(checkCondition);

        expect(result).toBe(3);

    });

    it('should return -1 if there is no match', function () {        
        function checkConditionNoMatch(item) {
            return item > 55
        };
        var numbers = new Hooray (1, 4, 5, 53, 23, 37);
        var result = numbers.findIndex(checkConditionNoMatch);

        expect(result).toBe(-1);

    });    

    it('should return -1 if the hooray is empty', function () {
        function checkCondition(item) {
        return item > 5
        };

        var numbers = new Hooray();
        var result = numbers.findIndex(checkCondition);
    
        expect(result).toBe(-1);

    });   


    it('should return -1 when there is no element that accomplish the expression', function () {
        var numbers = new Hooray(1, 2, 3);
        function checkCondition(item) {
            return item > 5
        };
        
        expect(numbers.findIndex(checkCondition)).toBe(-1);
    });


    it('should return an errror if the function is not a function' , function () {
        var numbers = new Hooray(1, 2, 3);
        var multiply = 'hola';

        expect(function() {numbers.findIndex(multiply)}).toThrowError(multiply + " is not a function");

    });

    
});