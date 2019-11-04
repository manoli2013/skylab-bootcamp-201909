describe('indexOf hooray', function () {
    it('should returns the position of the element on the hooray', function () {
        var hor = new Hooray(1, 9, 5, 2, 3);
        var result = hor.indexOf(5);
        expect(result).toBe(2);
    });

    it('should returns the position of the undefined on the hooray', function () {
        var hor = new Hooray(1, 9, 5, undefined, 3);
        var result = hor.indexOf();
        expect(result).toBe(3);
    });

    it('should returns the position of the null on the hooray', function () {
        var hor = new Hooray(1, 9, 5, null, 3);
        var result = hor.indexOf(null);
        expect(result).toBe(3);
    });

    it('should returns -1 because the element is not on the hooray', function () {
        var hor = new Hooray(1, 9, 5, 2, 3);
        var result = hor.indexOf(51);
        expect(result).toBe(-1);
    });

    it('should returns -1 because the hooray is empty and can not find the value in', function(){
        var hor = new Hooray();
        var result = hor.indexOf(51);
        expect(result).toBe(-1);
    });

    it('should returns -1 because the element is undefined and there are not undefined values on the hooray', function(){
        var hor = new Hooray(1, 9, 5, 2, 3);
        var result = hor.indexOf();
        expect(result).toBe(-1);
    });

    it('should returns the position of the element inside the hooray, starting  from the start parameter', function(){
        var hor = new Hooray(21, 1, 9, 5, 2, 3, 21, 27);
        var result = hor.indexOf(21,3);
        expect(result).toBe(6);
    });

    it('should returns -1 because the correct result is before the start parameter', function(){
        var hor = new Hooray(21, 1, 9, 5, 2, 3, 27);
        var result = hor.indexOf(21,3);
        expect(result).toBe(-1);
    });   
});