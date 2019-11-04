describe('fill', function () {

    it('should fail if array is NOT an array', function () {
        var array; //= [1, 3, 4, 6, 7, 8, 6];
        var item = 3;
        expect(function() { fill(array,item);}).toThrowError(TypeError, array + ' is not an array');
    });
    it('should fail on NULL array', function () {
        var array = null; //= [1, 3, 4, 6, 7, 8, 6];
        var item = 3;
        expect(function() { fill(array,item);}).toThrowError(TypeError, array + ' is not an array');
    });
 });