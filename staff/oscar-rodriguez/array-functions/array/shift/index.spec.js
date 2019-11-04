describe ('SHIFT', function () {

    it('should return the first item of the array and delete it from the array', function () {
        var array = ['one', 'two', 'three'];
        var result = shift(array);
        expect (result.toString()).toBe('one');
        expect (array.toString()).toBe('two,three');
    })

    it('should return undefined when an empty array is sent', function () {
        var array = [];

        expect (shift(array)).toBe(undefined);
    })

    it('should throw a TypeError when first parameter is not an array', function () {
        var array = 2;

        expect (function () {shift(array)}).toThrowError(TypeError,array + 'is not an array');
    })

})