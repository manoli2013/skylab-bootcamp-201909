describe('Hooray.prototype.fill', function () {

    it('should fill the function with a value', function () {
        var hooray = new Hooray(1, 3, 4, 6, 7, 8, 6);
        hooray.fill(7);
        var expected = new Hooray(7,7,7,7,7,7,7)

        expect(hooray).toEqual(expected);
    });

    it('should fill the function with a value and startIndex', function () {
        var hooray = new Hooray(1, 3, 4, 6, 7, 8, 6);
        var a = 3;
        var expected = new Hooray(1,3,4,7,7,7,7);
        hooray.fill(7, a);

        expect(hooray).toEqual(expected);       
    });

    it('should fill the function with a value, startIndex and endIndex', function () {
        var hooray = new Hooray(1, 3, 4, 6, 7, 8, 6);
        var a = 3;
        var b = 6;
        hooray.fill(7, a, b);
        var expected = new Hooray(1,3,4,7,7,7,6);

        expect(hooray).toEqual(expected);        
    });

    it('should fill with undefined when item is not declared', function(){
        var hooray = new Hooray(1, 3);
        hooray.fill();
        var expected = new Hooray(undefined,undefined);

        expect(hooray).toEqual(expected);
    });
});
