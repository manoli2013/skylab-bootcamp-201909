describe('join()', function() {

    it('Should join the elements of the array in a single string, without second parameter', function() {
        var array = [1, 2, 3];
        expect(join(array)).toBe('1,2,3');
    });

    it('Should join the elements of the array in a single string, with second parameter', function() {
        var array = [1, 2, 3];
        var caract = '*'
        expect(join(array, caract)).toBe('1*2*3');
    });

    it('Should join the elements of the array(with internal array) in a single string, without second parameter', function() {
        var array = [
            [1, 2], 3, 4
        ];
        expect(join(array)).toBe('1,2,3,4');
    });


    it('Should join the elements of the array(with internal array) in a single string, with second parameter', function() {
        var array = [
            [1, 2], 3, 4
        ];
        var caract = '*'
        expect(join(array, caract)).toBe('1,2*3*4');
    });


    it('array should be the same after the method', function() {
        var a = [1, 2, 3];
        var expectedArray = [1, 2, 3];
        join(a);
        expect(a).toEqual(expectedArray);
    });


    it('Should throws an error if array is not instance of Array', function() {
        var array = 2
        expect(function() { join(array) }).toThrowError(TypeError, array + ' is not an Array');
    });

});