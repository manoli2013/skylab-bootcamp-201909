describe ('JOIN', function () {
    it('should return the array as string', function () {
        var array = ['one', 'two', 'three'];

        expect (join(array)).toEqual('one,two,three');
    })

    it('should return the array as string with the * separator', function () {
        var array = ['one', 'two', 'three'];

        expect (join(array, "*")).toEqual('one*two*three');
    })

    it('should return an empty String when an empty array is sent, even when a separator is sent too', function () {
        var array = [];

        expect (join(array)).toEqual('');
        expect (join(array,'*')).toEqual('');
    })

    it('should throw a TypeError when first parameter is not an array', function () {
        var array = 2;

        expect (function () {join(array, "*")}).toThrowError(TypeError,array + ' is not an array');
    })
});