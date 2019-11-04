describe('concat', function () {

    it('should concat both arrays in other one', function () {

        var a = [1, 2, 3, 4, 5];
        var b = [6, 7, 8, 9, 10];
        var result = concat(a, b);

        expect(result.length).toBe(10);
        expect(result[0]).toBe(1);
        expect(result[result.length - 1]).toBe(10);
    });

    it('should concat more than two arrays in one', function () {

        var a = [1, 2, 3, 4, 5];
        var b = [6, 7, 8, 9, 10];
        var c = [11, 12, 13, 14, 15];
        var result = concat(a, b, c);
        
        expect(result.length).toBe(15);
        expect(result[0]).toBe(1);
        expect(result[result.length - 1]).toBe(15);
    });

    it('should fail on undefined array', function () {
        var a 
        var b = [6, 7, 8, 9, 10];

        expect(function () { concat(a ,b); }).toThrowError(TypeError, 'undefined is not an array');
    });

    it('should return a new array with the values of the first if the others are not defined', function () {

        var a = [1, 2, 3, 4, 5];
        var b 
        var c 
        var result = concat(a, b, c);

        expect(result.length).toBe(5);
        expect(result).toEqual(new Array(1,2,3,4,5));
    });

    it('should return a new array with the values of the first if the others are empty', function () {

        var a = [1, 2, 3, 4, 5];
        var b = [];
        var c = [];
        var result = concat(a, b, c);

        expect(result.length).toBe(5);
        expect(result).toEqual(new Array(1,2,3,4,5));
    });
});