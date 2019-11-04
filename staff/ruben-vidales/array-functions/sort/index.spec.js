describe('sort', function () {
    it('should order the array', function () {
        var ar = [4, 2, 1, 3, 5];
        var result = sort(ar);
        expect(result.length).toBe(5);
        expect(result).toBe(ar);
        expect(result).toEqual(new Array(1, 2, 3, 4, 5));
    });

    it('should order the array (more than one equal numbers)', function () {
        var ar = [4, 2, 1, 3, 5, 4];
        var result = sort(ar);
        expect(result.length).toBe(6);
        expect(result).toBe(ar);
        expect(result).toEqual(new Array(1, 2, 3, 4, 4, 5));
    });

    it('should order the array (more than one equal numbers)', function () {
        var ar = ['ruben','javier','adrian','martin','felipe','froilan'];
        var result = sort(ar);
        expect(result.length).toBe(6);
        expect(result).toBe(ar);
        expect(result).toEqual(new Array('adrian','felipe','froilan','javier','martin','ruben'));
    });

    it('should fail on undefined array', function () {
        var array //= [1, 2, 3];

        expect(function () { sort(array); }).toThrowError(TypeError, 'undefined is not an array');
    });
});