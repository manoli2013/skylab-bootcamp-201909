describe('pop', function () {
    it('should deletes the last item from the array', function () {
        var ar = [1, 2, 3, 4, 5];
        var result = pop(ar);
        expect(ar.length).toBe(4);
        expect(result).toBe(5);
        expect(ar).toEqual([1, 2, 3, 4]);
    });

    it('should returns an empty array if the array length at the beginning is 1', function () {
        var ar = [1];
        var result = pop(ar);
        expect(ar.length).toBe(0);
        expect(ar).toEqual([]);
        expect(result).toEqual(1);
    });

    it('should returns undefined if the array is empty', function () {
        var ar = [];
        var result = pop(ar);
        expect(ar.length).toBe(0);
        expect(ar).toEqual([]);
        expect(result).toBe(undefined);
    });

    it('should throws error if the array is not defined', function () {
        var a //=[1,2,3]
        expect(function () { pop(a) }).toThrowError(TypeError, 'undefined is not an array');
    });
});