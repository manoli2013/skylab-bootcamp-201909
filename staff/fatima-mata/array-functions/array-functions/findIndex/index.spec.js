describe('findIndex', function () {

    it('should return the index of the first element that comply the condition', function () {

        var array = [9, 3, 12, 5, 8, 130, 44];
        var expression = function (x) {
            return x > 10;
        };
        var result = findIndex(array, expression);
        expect(result).toBe(2);
    });

    it('should return -1 if no element of the array comply the condition', function () {

        var array = [9, 3, 12, 5, 8, 130, 44];
        var expression = function (x) {
            return x > 1000;
        };
        var result = findIndex(array, expression);
        expect(result).toBe(-1);
    });

    it('should return -1 if the array is empty', function () {

        var array = [];
        var expression = function (x) {
            return x === 21;
        };
        var result = findIndex(array, expression);
        expect(result).toBe(-1);
    });

    it('should fail on undefined array', function() {

        var array 
        var expression = function (x) {
            return x >= 10;
        };

        expect(function(){find(array, expression)}).toThrowError(TypeError, 'undefined is not an array');
    });    

    it('should fail on undefined expression', function() {
        
        var array = [12, 5, 8, 130, 44];
        var expression 

        expect(function () { find(array, expression); }).toThrowError(TypeError, 'undefined is not a function');
    });  
});