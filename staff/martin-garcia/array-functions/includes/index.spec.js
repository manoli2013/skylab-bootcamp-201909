describe('includes()', function() {

    it('Should returns true', function() {
        var array = [1, 2, 3];
        expect(includes(array, 2)).toBeTruthy();
    });

    it('Should returns false', function() {
        var array = [1, 2, 3];
        expect(includes(array, 0)).toBeFalsy();
    });

    it('array should be the same after the method', function() {
        var a = [1, 2, 3];
        var expectedArray = [1, 2, 3];
        includes(a);
        expect(a).toEqual(expectedArray);
    });


});