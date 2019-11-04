describe('some', function(){
    it('should return true because find one coincidence within the expression', function(){
        var ar1 = [4, 5, 6];
        var expression = function (element) {return element % 2 === 0;};

        var result = some(ar1, expression);
        expect(result).toBeTruthy();
    });

    it('should fail on undefined array', function() {
        var ar1 //= [4, 5, 6];
        var expression = function (element) {return element % 2 === 0;};

        expect(function(){some(ar1, expression)}).toThrowError(TypeError, 'undefined is not an array');
    });    

    it('should fail on undefined expression', function() {
        var ar1 = [4, 5, 6];
        var expression //= function (element) {return element % 2 === 0;};

        expect(function () { some(ar1, expression); }).toThrowError(TypeError, 'undefined is not a function');
    });  
});