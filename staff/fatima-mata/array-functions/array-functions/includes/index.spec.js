describe('includes', function() {

    it('should returns true', function() {
       
        var a = [1, 2, 3];
        
        expect(includes(a, 2)).toBeTruthy();
    });

    it('should returns false', function() {
        
        var a = [1, 2, 3];

        expect(includes(a, 0)).toBeFalsy();
    });

    it('should be the same after the method', function() {
       
        var a = [1, 2, 3];
        var b = [1, 2, 3];
        
        includes(a);

        expect(a).toEqual(b);
    });
});