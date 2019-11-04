describe('pop', function() {

    it('should remove the last item, array case', function() {
       
        var arr = [1, 2, 3];
        expect(pop(arr)).toEqual(3);
    });

    it('should remove the last item, string case', function() {
       
        var arr = 'hola';
        expect(pop(arr)).toEqual('a');
    });

    it('length of initial array should decrease(-1)', function() {
        
        var arr = [1, 2, 3];
        pop(arr);
        expect(arr).toEqual([1, 2]);
    });

    it('if array.length === 0 should return undefined', function() {
       
        var a = [];
        expect(pop(a)).toBe(undefined);
    });
});