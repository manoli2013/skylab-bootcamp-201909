describe('pop', function () {

    it('should delete the last item from the array', function () {
        var array = [1, 2, 3, 4, 5];
        var result = pop(array);
        expect(array.length).toBe(4);
        expect(result).toBe(5);
        expect(array).toEqual([1, 2, 3, 4]);
    });

    it('should return an empty array if the array length at the beginning is 1', function () {
        var array = [1];
        var result = pop(array);
        expect(array.length).toBe(0);
        expect(array).toEqual([]);
        expect(result).toEqual(1);
    });

    it('should return undefined if the array is empty', function () {
        var array = [];
        var result = pop(array);
        expect(array.length).toBe(0);
    
        expect(result).toBe(undefined);
    });

    it('should throw error if the array is not defined', function () {
        var a //=[1,2,3]
        expect(function () { pop(a) }).toThrowError(TypeError, 'undefined is not an array');
    });
});