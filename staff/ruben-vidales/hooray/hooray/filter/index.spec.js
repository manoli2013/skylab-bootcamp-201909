describe('filter hooray', function () {
    it('should return the elements that comply the condition', function () {
        var hor = new Hooray(12, 5, 8, 130, 44);
        var expression = function (x) {
            return x >= 10;
        };
        var result = hor.filter(expression);
        var expected = new Hooray(12,130,44);
  
        expect(result.length).toBe(3);
        expect(result).toEqual(expected);
    });

    it('should return an empty hooray if any element comply the condition', function () {
        var hor = new Hooray(12, 5, 8, 130, 44);
        var expression = function (x) {
            return x == 6;
        };
        var result = hor.filter(expression);
        var expected = new Hooray();
  
        expect(result.length).toBe(0);
        expect(result).toEqual(expected);
    });  
    
    it('should return an empty hooray if the original hooray is empty', function () {
        var hor = new Hooray();
        var expression = function (x) {
            return x == 6;
        };
        var result = hor.filter(expression);
        var expected = new Hooray();
  
        expect(result.length).toBe(0);
        expect(result).toEqual(expected);
    });

    it('should fail on undefined expression', function() {
        var hor = new Hooray(12, 5, 8, 130, 44);
        var expression //= function (x) { return x >= 10; };

        expect(function () { hor.filter(expression); }).toThrowError(TypeError, 'undefined is not a function');
    });     
});