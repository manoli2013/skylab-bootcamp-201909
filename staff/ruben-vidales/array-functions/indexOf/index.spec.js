describe('indexOf', function () {
    it('should returns the position of the element on the array', function () {
        var numbers = [1, 9, 5, 2, 3];
        var result = indexOf(numbers, 5);
        expect(result).toBe(2);
    });

    it('should returns the position of the undefined on the array', function () {
        var numbers = [1, 9, 5, undefined, 3];
        var result = indexOf(numbers);
        expect(result).toBe(3);
    });

    it('should returns the position of the null on the array', function () {
        var numbers = [1, 9, null, 3];
        var result = indexOf(numbers,null);
        expect(result).toBe(2);
    });

    it('should returns -1 because the element is not on the array', function () {
        var numbers = [1, 9, 5, 2, 3];
        var result = indexOf(numbers, 51);
        expect(result).toBe(-1);
    });

    it('should returns -1 because the array is empty and can not find the value in', function(){
        var numbers = [];
        var result = indexOf(numbers, 51);
        expect(result).toBe(-1);
    });

    it('should returns -1 because the element is undefined and there are not undefined values on the array', function(){
        var numbers = [1, 9, 5, 2, 3];
        var result = indexOf(numbers);
        expect(result).toBe(-1);
    });

    it('should returns the position of the element inside the array, starting  from the start parameter', function(){
        var numbers = [21, 1, 9, 5, 2, 3, 21, 27];
        var result = indexOf(numbers,21,3);
        expect(result).toBe(6);
    });

    it('should returns -1 because the correct result is before the start parameter', function(){
        var numbers = [21, 1, 9, 5, 2, 3, 27];
        var result = indexOf(numbers,21,3);
        expect(result).toBe(-1);
    });

    it('should fail on undefined array', function() {
        var numbers //= [21, 1, 9, 5, 2, 3, 27];


        expect(function(){indexOf(numbers, 9)}).toThrowError(TypeError, 'undefined is not an array');
    });    
});