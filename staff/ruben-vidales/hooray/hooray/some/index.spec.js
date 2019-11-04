describe('some hooray', function(){
    it('should return true because find one coincidence within the expression', function(){
        var hor = new Hooray(4, 5, 6);
        var expression = function (element) {return element % 2 === 0;};

        var result = hor.some(expression);
        expect(result).toBeTruthy();
    });    

    it('should fail on undefined expression', function() {
        var hor = new Hooray(4, 5, 6);
        var expression //= function (element) {return element % 2 === 0;};

        expect(function () { hor.some(expression); }).toThrowError(TypeError, 'undefined is not a function');
    });  
});