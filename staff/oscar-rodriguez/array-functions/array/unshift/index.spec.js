describe ('UNSHIFT', function () {

    it('should add the sent item at beginning of the array', function () {
        var array = [2,4,6];
        unshift(array,1);
        expect(array.toString()).toBe('1,2,4,6');
    });

    it('should add all items sent at beginning of the array', function () {
        var array = [2,4,6];
        unshift(array,1,2,3);
        expect(array.toString()).toBe('1,2,3,2,4,6');
    });

    it('should increase length of array as some items sent', function () {
        var array = [2,4,6];

        expect(unshift(array,1,2,3)).toBe(6);
    });

    it('should return 0 when empty array and any items are sent', function () {
        var array = [];

        
        expect(unshift(array)).toBe(0);
        expect(array.toString()).toBe('');
    })

    it('should succesfully add item/s sent on an empty array is sent', function () {
        var array = [];

        expect(unshift(array,1,2,3)).toBe(3);
        expect(array.toString()).toBe('1,2,3');
    })

    it('should throw a TypeError when first parameter is not an array', function () {
        var array = 2;

        expect (function () {unshift(array)}).toThrowError(TypeError,array + ' is not an array');
    })
});